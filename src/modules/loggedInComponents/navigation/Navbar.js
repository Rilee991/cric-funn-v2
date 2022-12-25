import React, { useState } from 'react';
import { Drawer } from 'antd';
import { useRecoilState } from 'recoil';

import { userAtom } from '../../../store/userStore';
import NavLeftSide from './NavLeftSide';
import NavRightSide from './NavRightSide';
import { CricFunnImage } from '../../../resources/icons/Icons';

const Navbar = (props) => {
    const { setOpenDrawer } = props;
    const [user, setUser] = useRecoilState(userAtom);

    return (
        <div className="tw-sticky tw-top-0">
            <nav className="tw-min-w-full tw-border-gray-200 tw-bg-gray-900 tw-shadow-xl">
                <div className="tw-p-2 md:tw-max-w-2xl lg:tw-max-w-4xl xl:tw-max-w-5xl tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-mx-auto">
                    <NavLeftSide />
                    <NavRightSide setOpenDrawer={setOpenDrawer} user={user} setUser={setUser}/>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
