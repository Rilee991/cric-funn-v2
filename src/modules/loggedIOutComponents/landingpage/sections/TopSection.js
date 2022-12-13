import React from 'react';

import Trophies from '../../../../resources/trophy2.png';

import Button from '../../../../components/Button';
import { RightArrowIcon } from '../../../../resources/icons/Icons';

const TopSection = (props) => {
    const { setIsFormDialogOpen } = props;

    return (
        <div className="tw-grid tw-max-w-screen-xl tw-px-4 tw-py-8 tw-mx-auto lg:tw-gap-8 xl:tw-gap-0 lg:tw-py-16 lg:tw-grid-cols-12">
            <div className="tw-mr-auto tw-place-self-center lg:tw-col-span-7">
                <h1 className="tw-max-w-max tw-mb-4 tw-text-4xl tw-font-extrabold tw-tracking-tight tw-leading-none md:tw-text-5xl xl:tw-text-6xl tw-text-white">Participate in tournaments and compete against the best minds in the realm of betting.</h1>
                <p className="tw-max-w-2xl tw-mb-6 tw-font-light tw-text-lg lg:tw-mb-8 lg:tw-text-2xl tw-text-gray-200">Initiate friendly bets among your best friends and spend fun cherishing moments!</p>
                <Button text="Get started" icon={<RightArrowIcon className="tw-w-6 tw-h-6" />} onClickHandler={() => setIsFormDialogOpen(true)} />
            </div>
            <div className="tw-mt-0 tw-col-span-5 tw-flex tw-justify-center tw-items-center">
                <img src={Trophies} />
            </div>
        </div>
    );
}

export default TopSection;
