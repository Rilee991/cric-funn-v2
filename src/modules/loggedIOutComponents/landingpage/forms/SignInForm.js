import React, { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { find, get, isEmpty } from 'lodash';
import { Spin } from 'antd';
import { Loading3QuartersOutlined, CloseOutlined } from '@ant-design/icons';
import { useRecoilState } from 'recoil';

import { firebase, auth } from '../../../../firebase/config';
import { showToastMessage } from '../../../../components/Toast';
import { codeStatus } from '../../../../common/enum';
import Button from '../../../../components/Button';
import { userAtom } from '../../../../store/userStore';
import { LoadingCircleIcon } from '../../../../resources/icons/Icons';

const SignInForm = (props) => {
    const { setIsOpenLoginForm, setIsFormDialogOpen, existingUsers } = props;

    const [user, setUser] = useRecoilState(userAtom);

    const [codeSendingStatus, setCodeSendingStatus] = useState(codeStatus.STARTED);
    const [codeResendingStatus, setCodeResendingStatus] = useState(codeStatus.NOT_STARTED);
    const [codeVerificationStatus, setCodeVerificationStatus] = useState(codeStatus.NOT_STARTED);
    const [formVals, setFormVals] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [tip, setTip] = useState("");
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        if(!window.recaptchaVerifier) {
            window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
                "recaptcha-container", {
                    size: "invisible",
                    callback: function(response) {
                        console.log("Captcha Resolved");
                    },
                    defaultCountry: "IN",
                }
            );
        }
    },[]);

    const onChangeText = (event) => {
        const { name, value } = event.target;

        setFormVals({
            ...formVals,
            [name]: value
        });
    }

    const toggleLoaderWithText = (isLoading, tip) => {
        setIsLoading(isLoading);
        setTip(tip);
    }

    const onClickSendCode = async (event) => {
        toggleLoaderWithText(true, "Checking for errrors...");
        setCodeSendingStatus(codeStatus.SENDING_CODE);
        event.preventDefault();

        try {
            if(isEmpty(formVals["username"])) {
                showToastMessage("error", "Please enter username.");
                setCodeSendingStatus(codeStatus.SENDING_CODE_FAILURE);
                toggleLoaderWithText(false,"");
                return;
            }

            const userDetails = find(existingUsers, { username: formVals["username"] });
            const mobile = get(userDetails, "mobile", "");

            setFormVals({ ...formVals, mobile });
            setUserDetails(userDetails);

            if(isEmpty(mobile)) {
                showToastMessage("error", "No number has been registered with the above username. Please refresh and try again. If the issue still persists, please create an account.");
                setCodeSendingStatus(codeStatus.SENDING_CODE_FAILURE);
                toggleLoaderWithText(false,"");
                return;
            }

            toggleLoaderWithText(true, "Sending code...");
            const recaptchaVerifier = window.recaptchaVerifier;
            const confirmationResult = await auth.signInWithPhoneNumber(mobile, recaptchaVerifier);
            window.confirmationResult = confirmationResult;

            setCodeSendingStatus(codeStatus.SENDING_CODE_SUCCESS);
        } catch (e) {
            showToastMessage("error", `Error in sending code: ${e.message}`);
            console.log(e.message);
            setCodeSendingStatus(codeStatus.SENDING_CODE_FAILURE);
        }

        toggleLoaderWithText(false, "");
    }

    const onClickResendCode = async (event) => {
        toggleLoaderWithText(true, "Checking for errors...");
        setCodeResendingStatus(codeStatus.RESENDING_CODE);
        event.preventDefault();

        try {
            if(isEmpty(formVals["username"])) {
                showToastMessage("error", "Please enter username.");
                setCodeResendingStatus(codeStatus.RESENDING_CODE_FAILURE);
                toggleLoaderWithText(false,"");
                return;
            }

            toggleLoaderWithText(true, "Resending code...");
            const confirmationResult = await auth.signInWithPhoneNumber(formVals["mobile"], window.recaptchaVerifier);
            window.confirmationResult = confirmationResult;

            setCodeResendingStatus(codeStatus.RESENDING_CODE_SUCCESS);
        } catch (e) {
            showToastMessage("error", `Error in resending code: ${e.message}`);
            console.log(e.message);
            setCodeResendingStatus(codeStatus.RESENDING_CODE_FAILURE);
        }

        toggleLoaderWithText(false, "");
    }

    const onClickVerifyCode = async (event) => {
        event.preventDefault();
        setCodeVerificationStatus(codeStatus.VERIFYING_CODE);
        toggleLoaderWithText(true, "Checking for errrors...");
        
        try {
            if(isEmpty(formVals["code"])) {
                showToastMessage("error", "Please enter code.");
                setCodeVerificationStatus(codeStatus.VERIFYING_CODE_FAILURE);
                toggleLoaderWithText(false,"");
                return;
            }

            toggleLoaderWithText(true, "Verifying code...");
            await window.confirmationResult.confirm(formVals["code"]);
            setCodeVerificationStatus(codeStatus.VERIFYING_CODE_SUCCESS);
            setUser(userDetails);
            showToastMessage("success", `Successfully signed in!`);
        } catch (e) {
            showToastMessage("error", `Error verifying code. ${e.message}`);
            setCodeVerificationStatus(codeStatus.VERIFYING_CODE_FAILURE);
            console.log(e.message);
        }
        toggleLoaderWithText(false, "");
    }

    return (
        <Dialog.Panel className="tw-w-full tw-max-w-md tw-transform tw-overflow-hidden tw-rounded-2xl tw-bg-white tw-p-6 tw-text-left tw-align-middle tw-shadow-xl tw-transition-all">
            <Spin spinning={isLoading} tip={tip} indicator={<Loading3QuartersOutlined spin />}>
                <Dialog.Title
                    as="h3"
                    className="tw-border-b-2 tw-flex tw-justify-between tw-border-gray-200 tw-mb-2 tw-border-solid tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900"
                >
                    <div>Sign into your account</div>
                    <div className="tw-cursor-pointer" onClick={() => setIsFormDialogOpen(false)}> <CloseOutlined /> </div>
                </Dialog.Title>
                <form className="tw-space-y-6">
                    <div>
                        <label htmlFor="username" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900">Username</label>
                        <input onChange={onChangeText} type="name" name="username" id="username" className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5" placeholder="i_am_ironman" required />
                    </div>
                
                    <div id="recaptcha-container" className="tw-hidden"></div>
                    <Button
                        useIcon={false}
                        text={codeSendingStatus === codeStatus.SENDING_CODE ? 
                            <>
                                <LoadingCircleIcon className="tw-inline tw-mr-3 tw-w-4 tw-h-4 tw-text-white tw-animate-spin" />
                                Sending Code...
                            </> : codeSendingStatus === codeStatus.SENDING_CODE_SUCCESS ? "Code Sending Done" : "Send Code" 
                        }
                        disabled={codeSendingStatus === codeStatus.SENDING_CODE_SUCCESS}
                        onClickHandler={onClickSendCode}
                        className="tw-w-full tw-text-white tw-bg-blue-700 disabled:tw-bg-gray-400 hover:tw-bg-blue-800 focus:tw-ring-2 focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center tw-mr-2 tw-justify-center tw-inline-flex tw-items-center"
                    />
                    { codeSendingStatus === codeStatus.SENDING_CODE_SUCCESS ? <>
                        <div>
                            <div className="tw-p-2 tw-mb-4 tw-text-sm tw-text-blue-700 tw-bg-blue-100 tw-rounded-lg" role="alert">
                                <span className="tw-font-medium">Info:</span> A code has been sent to your registered mobile number ending with XXXXXX{formVals["mobile"]?.slice(9)}. Please enter the code below.
                            </div>
                            <label htmlFor="code" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900">Code</label>
                            <input onChange={onChangeText} type="password" name="code" id="code" className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5" placeholder="******" required />
                        </div>
                        <div className="tw-flex tw-flex-col">
                            <Button
                                useIcon={false}
                                text={codeResendingStatus === codeStatus.RESENDING_CODE ? 
                                    <>
                                        <LoadingCircleIcon className="tw-inline tw-mr-3 tw-w-4 tw-h-4 tw-text-white tw-animate-spin" />
                                        Resending Code...
                                    </> : codeResendingStatus === codeStatus.RESENDING_CODE_SUCCESS ? "Code Resending Done" : "Resend Code"
                                }
                                disabled={codeResendingStatus === codeStatus.RESENDING_CODE_SUCCESS || codeVerificationStatus === codeStatus.VERIFYING_CODE_SUCCESS}
                                onClickHandler={onClickResendCode}
                                className="tw-mb-1 disabled:tw-bg-gray-400 tw-w-full tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center"
                            />
                            <Button
                                useIcon={false}
                                text={codeVerificationStatus === codeStatus.VERIFYING_CODE ? 
                                    <>
                                        <LoadingCircleIcon className="tw-inline tw-mr-3 tw-w-4 tw-h-4 tw-text-white tw-animate-spin" />
                                        Verifying Code...
                                    </> : codeVerificationStatus === codeStatus.VERIFYING_CODE_SUCCESS ? "Code Verified" : "Verify Code"
                                }
                                disabled={codeVerificationStatus === codeStatus.VERIFYING_CODE_SUCCESS}
                                onClickHandler={onClickVerifyCode}
                                className="disabled:tw-bg-gray-400 tw-w-full tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center"
                            />
                        </div>
                    </> : null }
                    <div className="tw-text-sm tw-font-medium tw-text-gray-500">
                        Not registered? <span className="tw-text-blue-700 tw-cursor-pointer" onClick={() => setIsOpenLoginForm(false)}>Create account</span>
                    </div>
                </form>
            </Spin>
        </Dialog.Panel>
    );
}

export default SignInForm;
