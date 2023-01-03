import React from 'react';

import ChickenRollAndLassi from '../../../../resources/chickenRollAndLassi.png';
import ChallengeFriends from '../../../../resources/challengeFriends.png';
import RoastingFriends from '../../../../resources/roastingFriends.png';
import MakeMemories from '../../../../resources/makeMemories.png';

import Button from '../../../../components/Button';
import { RightArrowIcon } from '../../../../resources/icons/Icons';

const MiddleSection = (props) => {
    const { setIsFormDialogOpen } = props;

    return (
        <div className="tw-flex tw-flex-col tw-items-center tw-text-white">
            <div>
                <span className="tw-font-semibold tw-text-gray-300 tw-uppercase">Entertainment</span>
            </div>
            <br/>
            <div className="tw-flex tw-mx-1">
                <div>
                    <img className="tw-w-[300px]" src={ChallengeFriends} alt="dashboard image" />
                </div>
                <div className="tw-items-center tw-flex">
                    <h2 className="tw-mb-4 tw-text-2xl md:tw-text-4xl tw-tracking-tight tw-font-extrabold tw-text-white">Challenge friends in match bets for stupid stuffs!</h2>
                </div>
            </div>
            <br/>
            <div className="tw-flex tw-mx-1">
                <div className="tw-items-center tw-flex tw-ml-2">
                    <h2 className="tw-mb-4 tw-text-2xl md:tw-text-4xl tw-tracking-tight tw-font-extrabold tw-text-white">Win rolls of your choice and sweet milk!</h2>
                </div>
                <div>
                    <img className="tw-w-[300px]" src={ChickenRollAndLassi} alt="dashboard image" />
                </div>
            </div>
            <br/>
            <div className="tw-flex tw-mx-1">
                <div>
                    <img className="tw-w-[300px]" src={RoastingFriends} alt="dashboard image" />
                </div>
                <div className="tw-items-center tw-flex">
                    <h2 className="tw-mb-4 tw-text-2xl md:tw-text-4xl tw-tracking-tight tw-font-extrabold tw-text-white">Roast them till death for loosing the bet!</h2>
                </div>
            </div>
            <br/>
            <div className="tw-flex tw-mx-1">
                <div className="tw-items-center tw-flex tw-ml-2">
                    <h2 className="tw-mb-4 tw-text-2xl md:tw-text-4xl tw-tracking-tight tw-font-extrabold tw-text-white">Make cherishing memories with your buddies!</h2>
                </div>
                <div>
                    <img className="tw-w-[300px]" src={MakeMemories} alt="dashboard image" />
                </div>
            </div>
            <Button text="Get started" icon={<RightArrowIcon className="tw-w-6 tw-h-6" />} onClickHandler={() => setIsFormDialogOpen(true)} />
        </div>
    );
}

export default MiddleSection;
