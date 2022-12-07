import React, { useState } from 'react';
import { Drawer } from 'antd';
import { useRecoilState } from 'recoil';

import CricFunnLogo from '../../../resources/cricfunn.png';

import { userAtom } from '../../../store/userStore';
import { getProfileDateFromFirebase } from '../../../common/utils';

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [user, setUser] = useRecoilState(userAtom);


    // tw-max-w-[160px] sm:tw-max-w-none
    return (
        <div>
            <nav className="tw-min-w-full tw-border-gray-200 tw-bg-gray-900">
                <div className="tw-p-2 md:tw-max-w-2xl lg:tw-max-w-4xl xl:tw-max-w-5xl tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-mx-auto">
                    <div className="tw-flex tw-items-center">
                        <img src={CricFunnLogo} className="tw-h-8 tw-mr-3" alt="Flowbite Logo" />
                        <span className="tw-self-center tw-text-white tw-text-lg tw-font-semibold tw-whitespace-nowrap">Cric-Funn</span>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-end tw-cursor-pointer tw-space-x-2">
                        <button onClick={() => setOpenDrawer(true)} type="button" className="tw-inline-flex tw-items-center tw-justify-center tw-px-4 tw-py-2 tw-text-base tw-font-medium tw-text-center tw-border-2 tw-border-white tw-rounded-xl 
                            tw-text-white tw-transition-colors tw-duration-700 tw-transform focus:tw-outline-none"
                        >
                            Go
                            <svg className="tw-w-6 tw-h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </button>
                        <img className="tw-w-10 tw-h-10 tw-rounded-full" src={user.profilePic} alt="" />
                        <div className="tw-font-medium tw-text-gray-200">
                            <div>@{user.username}</div>
                            <div className="tw-text-sm tw-text-gray-200  tw-text-ellipsis">Joined in {getProfileDateFromFirebase(user.createdAt)}</div>
                        </div>
                    </div>
                </div>
            </nav>
            <Drawer
                title={
                    <div className="tw-flex tw-items-center">
                        <img src={CricFunnLogo} className="tw-h-10 tw-mr-3" alt="Flowbite Logo" />
                        <span className="tw-self-center tw-text-white tw-text-xl tw-font-semibold tw-whitespace-nowrap">Cric-Funn</span>
                    </div>
                }
                placement="left"
                width="40%"
                onClose={() => setOpenDrawer(false)}
                className="tw-z-[3000] tw-bg-gray-900"
                closable={true}
                visible={openDrawer}
                extra={<>
                    <button>Cancel</button>
                    <button type="primary">
                    Submit
                    </button>
                </>}
            >
                <div>Home</div>
                <div>Profile</div>
                <div>Tournaments</div>
                <div>Contact Me</div>
                <div>Raise Issue</div>
                <div>Logout</div>
            </Drawer>
        </div>
    );
}

export default Navbar;
