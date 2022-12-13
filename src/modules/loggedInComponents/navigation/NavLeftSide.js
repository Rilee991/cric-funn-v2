import React from 'react';

import { CricFunnImage } from '../../../resources/icons/Icons';

const NavLeftSide = () => {
    return (
        <div className="tw-flex tw-items-center">
            <CricFunnImage className="tw-h-8 sm:tw-h-12 tw-mr-3" />
            <span className="tw-self-center tw-text-white tw-text-lg tw-font-semibold tw-whitespace-nowrap">Cric-Funn</span>
        </div>
    );
}

export default NavLeftSide;
