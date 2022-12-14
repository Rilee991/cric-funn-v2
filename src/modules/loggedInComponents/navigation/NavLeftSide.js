import React from 'react';
import { useHistory } from 'react-router';

import { CricFunnImage } from '../../../resources/icons/Icons';

const NavLeftSide = () => {
    const history = useHistory();

    return (
        <div className="tw-flex tw-items-center tw-cursor-pointer" onClick={() => history.push("/")}>
            <CricFunnImage className="tw-h-8 sm:tw-h-12 tw-mr-3" />
            <span className="tw-self-center tw-text-white tw-text-lg tw-font-semibold tw-whitespace-nowrap">Cric-Funn</span>
        </div>
    );
}

export default NavLeftSide;
