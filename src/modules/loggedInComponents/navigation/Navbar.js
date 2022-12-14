import React, { useState } from 'react';
import { Drawer } from 'antd';
import { useRecoilState } from 'recoil';

import { userAtom } from '../../../store/userStore';
import NavLeftSide from './NavLeftSide';
import NavRightSide from './NavRightSide';
import { CricFunnImage } from '../../../resources/icons/Icons';

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [user, setUser] = useRecoilState(userAtom);

    return (
        <div className="tw-sticky tw-top-0">
            <nav className="tw-min-w-full tw-border-gray-200 tw-bg-gray-900 tw-shadow-xl">
                <div className="tw-p-2 md:tw-max-w-2xl lg:tw-max-w-4xl xl:tw-max-w-5xl tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-mx-auto">
                    <NavLeftSide />
                    <NavRightSide setOpenDrawer={setOpenDrawer} user={user} setUser={setUser}/>
                </div>
            </nav>
            <Drawer
                title={
                    <div className="tw-flex tw-items-center">
                        <CricFunnImage className="tw-h-10 tw-mr-3" />
                        <span className="tw-self-center tw-text-white tw-text-xl tw-font-semibold tw-whitespace-nowrap">Cric-Funn</span>
                    </div>
                }
                placement="left"
                width="40%"
                onClose={() => setOpenDrawer(false)}
                className="tw-z-[3000] tw-bg-gray-900"
                closable={true}
                visible={openDrawer}
                extra={
                    <>
                        <button>Cancel</button>
                    </>
                }
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
