import React from 'react';

import Trophies from '../../../../resources/trophy2.png';

const TopSection = (props) => {
    const { setIsFormDialogOpen } = props;

    return (
        <div className="tw-grid tw-max-w-screen-xl tw-px-4 tw-py-8 tw-mx-auto lg:tw-gap-8 xl:tw-gap-0 lg:tw-py-16 lg:tw-grid-cols-12">
            <div className="tw-mr-auto tw-place-self-center lg:tw-col-span-7">
                <h1 className="tw-max-w-max tw-mb-4 tw-text-4xl tw-font-extrabold tw-tracking-tight tw-leading-none md:tw-text-5xl xl:tw-text-6xl tw-text-white">Participate in tournaments and compete against the best minds in the realm of betting.</h1>
                <p className="tw-max-w-2xl tw-mb-6 tw-font-light tw-text-lg lg:tw-mb-8 lg:tw-text-2xl tw-text-gray-200">Initiate friendly bets among your best friends and spend fun cherishing moments!</p>
                <button className="tw-inline-flex tw-items-center tw-justify-center tw-px-5 tw-py-3 tw-text-base tw-font-medium tw-text-center
                    tw-border tw-border-gray-700 tw-rounded-lg tw-bg-blue-700
                    focus:tw-ring-1 focus:tw-ring-gray-600 tw-text-white
                    hover:tw-bg-indigo-700 tw-transition-colors tw-duration-700 tw-transform" onClick={() => setIsFormDialogOpen(true)}
                >
                    Get started
                    <svg className="tw-w-5 tw-h-5 tw-ml-2 tw--mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div className="tw-mt-0 tw-col-span-5 tw-flex tw-justify-center tw-items-center">
                <img src={Trophies} />
            </div>
        </div>
    );
}

export default TopSection;
