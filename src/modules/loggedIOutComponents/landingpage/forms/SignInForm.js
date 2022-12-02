import React, { useEffect, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { FcCheckmark } from 'react-icons/fc';
import { Dialog } from '@headlessui/react';
import { find, get, isEmpty } from 'lodash';

import { firebase, auth } from '../../../../firebase/config';
import { showToastMessage } from '../../../../components/Toast';
import { codeStatus } from '../../../../common/enum';


const SignInForm = (props) => {
    const { setIsOpenLoginForm, setIsFormDialogOpen, existingUsers } = props;

    const [codeSendingStatus, setCodeSendingStatus] = useState(codeStatus.STARTED);
    const [codeResendingStatus, setCodeResendingStatus] = useState(codeStatus.NOT_STARTED);
    const [codeVerificationStatus, setCodeVerificationStatus] = useState(codeStatus.NOT_STARTED);
    const [formVals, setFormVals] = useState({});

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

    const onClickSendCode = async (event) => {
        setCodeSendingStatus(codeStatus.SENDING_CODE);
        event.preventDefault();

        try {
            if(isEmpty(formVals["username"])) {
                showToastMessage("error", "Please enter username.");
                setCodeSendingStatus(codeStatus.SENDING_CODE_FAILURE);
                return;
            }

            const mobile = get(find(existingUsers, { username: formVals["username"] }), "mobile", "");
            setFormVals({ ...formVals, mobile });

            if(isEmpty(mobile)) {
                showToastMessage("error", "No number has been registered with the above username. Please refresh and try again. If the issue still persists, please create an account.");
                setCodeSendingStatus(codeStatus.SENDING_CODE_FAILURE);
                return;
            }

            const recaptchaVerifier = window.recaptchaVerifier;
            const confirmationResult = await auth.signInWithPhoneNumber(mobile, recaptchaVerifier);
            window.confirmationResult = confirmationResult;

            setCodeSendingStatus(codeStatus.SENDING_CODE_SUCCESS);
        } catch (e) {
            showToastMessage("error", `Error in sending code: ${e.message}`);
            console.log(e.message);
            setCodeSendingStatus(codeStatus.SENDING_CODE_FAILURE);
        }
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

            const confirmationResult = await auth.signInWithPhoneNumber(formVals["mobile"], window.recaptchaVerifier);
            window.confirmationResult = confirmationResult;

            setCodeResendingStatus(codeStatus.RESENDING_CODE_SUCCESS);
        } catch (e) {
            showToastMessage("error", `Error in resending code: ${e.message}`);
            console.log(e.message);
            setCodeResendingStatus(codeStatus.RESENDING_CODE_FAILURE);
        }
    }

    const onClickVerifyCode = async (event) => {
        event.preventDefault();
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

    return (
        <Dialog.Panel className="tw-w-full tw-max-w-md tw-transform tw-overflow-hidden tw-rounded-2xl tw-bg-white tw-p-6 tw-text-left tw-align-middle tw-shadow-xl tw-transition-all">
            <Dialog.Title
                as="h3"
                className="tw-border-b-2 tw-flex tw-justify-between tw-border-gray-200 tw-mb-2 tw-border-solid tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900"
            >
                <div>Sign into your account</div>
                <div className="tw-cursor-pointer" onClick={() => setIsFormDialogOpen(false)}> <VscChromeClose /> </div>
            </Dialog.Title>
            <form className="tw-space-y-6">
                <div>
                    <label htmlFor="username" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900">Username</label>
                    <input onChange={onChangeText} type="name" name="username" id="username" className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5" placeholder="i_am_ironman" required />
                </div>
                
                <div id="recaptcha-container"  className="tw-hidden"></div>
                <button disabled={codeSendingStatus === codeStatus.SENDING_CODE_SUCCESS} onClick={onClickSendCode} type="button" className="tw-w-full tw-text-white tw-bg-blue-700 disabled:tw-bg-gray-400 hover:tw-bg-blue-800 focus:tw-ring-2 focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center tw-mr-2 tw-justify-center tw-inline-flex tw-items-center">
                    { codeSendingStatus === codeStatus.SENDING_CODE ? 
                        <>
                            <svg role="status" className="tw-inline tw-mr-3 tw-w-4 tw-h-4 tw-text-white tw-animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>
                            Sending Code...
                        </> : codeSendingStatus === codeStatus.SENDING_CODE_SUCCESS ? "Code Sending Done" : "Send Code" 
                    }
                </button>
                { codeSendingStatus === codeStatus.SENDING_CODE_SUCCESS ? <>
                    <div>
                        <div className="tw-p-2 tw-mb-4 tw-text-sm tw-text-blue-700 tw-bg-blue-100 tw-rounded-lg" role="alert">
                            <span className="tw-font-medium">Info:</span> A code has been sent to your registered mobile number ending with XXXXXX{formVals["mobile"]?.slice(9)}. Please enter the code below.
                        </div>
                        <label htmlFor="code" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900">Code</label>
                        <input onChange={onChangeText} type="password" name="code" id="code" className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5" placeholder="******" required />
                    </div>
                    <div className="tw-flex tw-flex-col">
                        <button disabled={codeResendingStatus === codeStatus.RESENDING_CODE_SUCCESS || codeVerificationStatus === codeStatus.VERIFYING_CODE_SUCCESS} onClick={onClickResendCode} type="button" className="tw-mb-1 disabled:tw-bg-gray-400 tw-w-full tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center">
                            { codeResendingStatus === codeStatus.RESENDING_CODE ? 
                                <>
                                    <svg role="status" className="tw-inline tw-mr-3 tw-w-4 tw-h-4 tw-text-white tw-animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                    </svg>
                                    Resending Code...
                                </> : codeResendingStatus === codeStatus.RESENDING_CODE_SUCCESS ? "Code Resending Done" : "Resend Code" 
                            }
                        </button>
                        <button disabled={codeVerificationStatus === codeStatus.VERIFYING_CODE_SUCCESS} onClick={onClickVerifyCode} id="sign-in-button" type="submit" className="disabled:tw-bg-gray-400 tw-w-full tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center">
                            { codeVerificationStatus === codeStatus.VERIFYING_CODE ? 
                                <>
                                    <svg role="status" className="tw-inline tw-mr-3 tw-w-4 tw-h-4 tw-text-white tw-animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                    </svg>
                                    Verifying Code...
                                </> : codeVerificationStatus === codeStatus.VERIFYING_CODE_SUCCESS ? "Code Verified" : "Verify Code" 
                            }
                        </button>
                    </div>
                </> : null }
                <div className="tw-text-sm tw-font-medium tw-text-gray-500">
                    Not registered? <span className="tw-text-blue-700 tw-cursor-pointer" onClick={() => setIsOpenLoginForm(false)}>Create account</span>
                </div>
            </form>
        </Dialog.Panel>
    );
}

export default SignInForm;
