import React, { useState } from 'react';
import Icon from 'react-fontawesome';
import { Dialog } from '@headlessui/react';

const SignInForm = (props) => {
    const { setIsOpenLoginForm } = props;

    const [isOtpSent, setIsOtpSent] = useState(false);

    return (
        <Dialog.Panel className="tw-w-full tw-max-w-md tw-transform tw-overflow-hidden tw-rounded-2xl tw-bg-white tw-p-6 tw-text-left tw-align-middle tw-shadow-xl tw-transition-all">
            <Dialog.Title
                as="h3"
                className="tw-border-b-2 tw-flex tw-justify-between tw-border-gray-200 tw-mb-2 tw-border-solid tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900"
            >
                <div>Sign into your account</div>
                <div></div>
                <Icon className="tw-bg-black" name="rocket" />
            </Dialog.Title>
            
            <form className="tw-space-y-6" action="#">
                <div>
                    <label htmlFor="username" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900">Username</label>
                    <input type="name" name="username" id="username" className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5" placeholder="i_am_ironman" required />
                </div>
                <button type="submit" className="tw-w-full tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center">Send OTP</button>
                { isOtpSent ? <>
                    <div>
                        <label htmlFor="username" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900">An OTP has been sent to your registered mobile number. Please enter below.</label>
                        <input type="password" name="username" id="username" className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5" placeholder="******" required />
                    </div>
                    <div className="tw-flex tw-gap-1">
                        <button type="submit" className="tw-w-full tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center">Resend OTP</button>
                        <button type="submit" className="tw-w-full tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center">Login to your account</button>
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
