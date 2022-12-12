import React from 'react';

const SubscribedTournaments = () => {
    // {
    //     "id": "53d2aa5c-8ece-43a5-a779-e571a26c55c4",
    //     "name": "Ireland tour of England ODI Series, 2023",
    //     "startDate": "2023-09-20",
    //     "endDate": "Sep 26",
    //     "odi": 3,
    //     "t20": 0,
    //     "test": 0,
    //     "squads": 0,
    //     "matches": 3
    //   }
    return (
        <div>
            {[1,2,3,4,5].map(e => (
                <div className="tw-mb-4 tw-w-full tw-p-4 tw-text-center tw-bg-gray-300 tw-border tw-rounded-lg tw-shadow-md sm:tw-p-8">
                    <h5 className="tw-mb-2 tw-text-3xl tw-font-bold tw-text-gray-900">Ireland tour of England ODI Series, 2023</h5>
                    <p className="tw-mb-1 tw-text-base tw-text-gray-500 sm:tw-text-lg">5 Tests, 3 ODIs, 2 T20s</p>
                    <p className="tw-mb-5 tw-text-sm tw-text-gray-500 sm:tw-text-base">Starts On 23 September, 2023</p>
                    <div className="tw-items-center tw-justify-center tw-space-y-4 sm:tw-flex sm:tw-space-y-0 sm:tw-space-x-4">
                        <a href="#" className="tw-w-full sm:tw-w-auto tw-bg-gray-800 hover:tw-bg-gray-700 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-gray-300 tw-text-white tw-rounded-lg tw-inline-flex tw-items-center tw-justify-center tw-px-4 tw-py-2.5">
                            <svg className="tw-mr-2 tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" /></svg>
                            <div className="tw-text-left">
                                <div className="tw--mt-1 tw-font-sans tw-text-sm tw-font-semibold">Subscribe</div>
                            </div>
                        </a>
                        <a href="#" className="tw-w-full sm:tw-w-auto tw-bg-gray-800 hover:tw-bg-gray-700 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-gray-300 tw-text-white tw-rounded-lg tw-inline-flex tw-items-center tw-justify-center tw-px-4 tw-py-2.5">
                            <svg className="tw-mr-2 tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
                            <div className="tw-text-left">
                                <div className="tw--mt-1 tw-font-sans tw-text-sm tw-font-semibold">Withdraw</div>
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SubscribedTournaments;
