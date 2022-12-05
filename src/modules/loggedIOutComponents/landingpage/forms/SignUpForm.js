import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { find, get, isEmpty } from 'lodash';
import { Spin } from 'antd';
import { Loading3QuartersOutlined, CloseOutlined } from '@ant-design/icons';
import { useRecoilState } from 'recoil';

import { firebase, auth } from '../../../../firebase/config';
import { codeStatus, images } from '../../../../common/enum';
import { showToastMessage } from '../../../../components/Toast';
import { createNewUserInDb } from '../../../../apis/usercontroller';
import { userAtom } from '../../../../store/userStore';

const SignupForm = (props) => {
    const { setIsOpenLoginForm, setIsFormDialogOpen, existingUsers } = props;

    const [user, setUser] = useRecoilState(userAtom);

    const [formVals, setFormVals] = useState(false);
    const [codeSendingStatus, setCodeSendingStatus] = useState(codeStatus.STARTED);
    const [codeResendingStatus, setCodeResendingStatus] = useState(codeStatus.NOT_STARTED);
    const [codeVerificationStatus, setCodeVerificationStatus] = useState(codeStatus.NOT_STARTED);
    const [isLoading, setIsLoading] = useState(false);
    const [tip, setTip] = useState("");

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

    const toggleLoaderWithText = (isLoading, tip) => {
        setIsLoading(isLoading);
        setTip(tip);
    }

    const onChangeText = (event) => {
        const { name, value } = event.target;

        setFormVals({
            ...formVals,
            [name]: value
        });
    }

    const onClickSendCode = async (event) => {
        setCodeSendingStatus(codeStatus.SENDING_CODE);
        event.preventDefault();

        try {
            if(isEmpty(formVals["username"])) {
                showToastMessage("error", "Please enter username.");
                setCodeSendingStatus(codeStatus.SENDING_CODE_FAILURE);
                return;
            }

            formVals["mobile"] = `+91${formVals["mobile"]}`;

            const mobile = get(find(existingUsers, { username: formVals["username"] }), "mobile", "");

            if(!isEmpty(mobile)) {
                showToastMessage("error", "Username already taken. Please select a different username!");
                setCodeSendingStatus(codeStatus.SENDING_CODE_FAILURE);
                return;
            }

            if(isEmpty(formVals["mobile"])) {
                showToastMessage("error", "Please enter mobile.");
                setCodeSendingStatus(codeStatus.SENDING_CODE_FAILURE);
                return;
            }

            toggleLoaderWithText(true, "Sending code...");
            const recaptchaVerifier = window.recaptchaVerifier;
            const confirmationResult = await auth.signInWithPhoneNumber(formVals["mobile"], recaptchaVerifier);
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
        setCodeResendingStatus(codeStatus.RESENDING_CODE);
        event.preventDefault();

        try {
            if(isEmpty(formVals["username"])) {
                showToastMessage("error", "Please enter username.");
                setCodeResendingStatus(codeStatus.RESENDING_CODE_FAILURE);
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

        toggleLoaderWithText(false, "")
    }

    const onClickCreateAccount = async (event) => {
        event.preventDefault();

        try {
            toggleLoaderWithText(true, "Verifying code...");
            await verifyCode();

            toggleLoaderWithText(true, "Creating your account...");
            await createAccount();
        } catch (e) {
            console.log(e.message);
        }

        toggleLoaderWithText(false, "");
    }

    const verifyCode = async () => {
        setCodeVerificationStatus(codeStatus.VERIFYING_CODE);
        
        try {
            if(isEmpty(formVals["code"])) {
                showToastMessage("error", "Please enter code.");
                setCodeVerificationStatus(codeStatus.VERIFYING_CODE_FAILURE);
                return;
            }

            await window.confirmationResult.confirm(formVals["code"]);
            setCodeVerificationStatus(codeStatus.VERIFYING_CODE_SUCCESS);
        } catch (e) {
            showToastMessage("error", `Error verifying code. ${e.message}`);
            setCodeVerificationStatus(codeStatus.VERIFYING_CODE_FAILURE);
            console.log(e.message);
        }
    }

    const createAccount = async () => {
        const { username, mobile } = formVals;

        const user = {
            username,
            mobile,
            tournamentsInfo: [],
            isAdmin: false,
            isTestUser: false,
            profilePic: images.DEFAULT_PROFILE_IMAGE
        }

        const resp = await createNewUserInDb(user);

        setUser(user);
        auth.currentUser.updateProfile({ displayName: user.username });
    }

    return (
        <Dialog.Panel className="tw-w-full tw-max-w-md tw-transform tw-overflow-hidden tw-rounded-2xl tw-bg-white tw-p-6 tw-text-left tw-align-middle tw-shadow-xl tw-transition-all">
            <Spin spinning={isLoading} tip={tip} indicator={<Loading3QuartersOutlined spin />}>
                <Dialog.Title
                    as="h3"
                    className="tw-border-b-2 tw-flex tw-justify-between tw-border-gray-200 tw-mb-2 tw-border-solid tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900"
                >
                    <div>Sign into our platform</div>
                    <div className="tw-cursor-pointer" onClick={() => setIsFormDialogOpen(false)}> <CloseOutlined /> </div>
                </Dialog.Title>
                <form className="tw-space-y-6">
                    <div>
                        <label htmlFor="username" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900">Username</label>
                        <input onChange={onChangeText} type="name" name="username" id="username" className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5" placeholder="i_am_ironman" required />
                    </div>
                    <div>
                        <label htmlFor="mobile" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900">Mobile</label>
                        <input onChange={onChangeText} type="number" name="mobile" id="mobile" className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5" placeholder="82********" required />
                    </div>
                    <div id="recaptcha-container"  className="tw-hidden"></div>
                    <button onClick={onClickSendCode} className="tw-w-full tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center">Send Code</button>
                    { codeSendingStatus === codeStatus.SENDING_CODE_SUCCESS ? <>
                        <div>
                            <label htmlFor="code" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900">A code has been sent to your entered mobile number. Please enter below.</label>
                            <input onChange={onChangeText} type="password" name="code" id="code" className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5" placeholder="******" required />
                        </div>
                        <div className="tw-flex tw-gap-1">
                            <button onClick={onClickResendCode} className="tw-w-full tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center">Resend Code</button>
                            <button onClick={onClickCreateAccount} type="submit" className="tw-w-full tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center">Create account</button>
                        </div>
                    </> : null }
                    <div className="tw-text-sm tw-font-medium tw-text-gray-500">
                        Registered already? <span className="tw-text-blue-700 tw-cursor-pointer" onClick={() => setIsOpenLoginForm(true)}>Login to your profile</span>
                    </div>
                </form>
            </Spin>
        </Dialog.Panel>
    );
}

export default SignupForm;
