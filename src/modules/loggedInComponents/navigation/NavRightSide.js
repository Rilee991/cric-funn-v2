import React from 'react';

import ProfileDropdown from './ProfileDropdown';

const NavRightSide = (props) => {
    const { setOpenDrawer, user } = props;

    return (
        <div className="tw-flex tw-items-center tw-justify-end tw-space-x-2">
            <button onClick={() => setOpenDrawer(true)} type="button" className="tw-inline-flex tw-items-center tw-justify-center tw-px-1 tw-py-2 tw-text-base tw-font-medium tw-text-center  tw-border-white tw-rounded-xl
                tw-text-white tw-transition-colors tw-duration-700 tw-transform focus:tw-outline-none"
            >
                Go
                <svg className="tw-w-6 tw-h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </button>
            <ProfileDropdown user={user}/>
        </div>
    );
}

export default NavRightSide;
