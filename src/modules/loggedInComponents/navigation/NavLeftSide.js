import React from 'react';

import CricFunnLogo from '../../../resources/cricfunn.png';

const NavLeftSide = () => {
    return (
        <div className="tw-flex tw-items-center">
            <img src={CricFunnLogo} className="tw-h-8 sm:tw-h-12 tw-mr-3" alt="Flowbite Logo" />
            <span className="tw-self-center tw-text-white tw-text-lg tw-font-semibold tw-whitespace-nowrap">Cric-Funn</span>
        </div>
    );
}

export default NavLeftSide;
