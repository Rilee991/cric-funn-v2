import { Alert } from 'antd';
import { get } from 'lodash';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { getFormattedSeries } from '../../../../../apis/cricdataController';
import { userAtom } from '../../../../../store/userStore';
import Button from '../../../../../components/Button';
import { seriesTypes } from '../../../../../common/enum';

const SubscribedSeries = (props) => {
    const { setActiveTab } = props;

    const [user, setUser] = useRecoilState(userAtom);
    const [series, setSeries] = useState([]);

    useEffect(() => {
        let subscribedSeries = get(user,'subscribedSeries',[]);
        if(subscribedSeries) {
            subscribedSeries = getFormattedSeries(subscribedSeries);
            setSeries(subscribedSeries);
        }
    }, [])

    return (
        <div>
            {series.length ? series.map(e => {
                return (
                    <div className={`tw-mb-4 tw-w-full tw-p-4 tw-text-center tw-bg-gradient-to-r ${e.from || "tw-from-gray-600"} ${e.to || "tw-to-amber-900"} tw-border tw-rounded-lg tw-shadow-md sm:tw-p-8`}>
                        <h5 className="tw-mb-2 tw-text-3xl tw-font-bold tw-text-gray-200">{e.name}</h5>
                        <p className="tw-mb-1 tw-text-base tw-text-gray-300 sm:tw-text-lg">{`${e.test ? e.test + " Tests." : ""}`} {`${e.odi ? e.odi + " ODIs." : ""}`} {`${e.t20 ? e.t20 + " T20s." : ""}`}</p>
                        <p className="tw-mb-5 tw-text-sm tw-text-gray-400 sm:tw-text-base">Starts On {moment(e.startDate).format("dddd DD MMMM, YYYY")}</p>
                        <div className="tw-items-center tw-justify-center tw-space-y-4 sm:tw-flex sm:tw-space-y-0 sm:tw-space-x-4">
                            <div className="tw-w-full sm:tw-w-auto tw-bg-blue-800 hover:tw-bg-blue-700 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-gray-300 tw-text-white tw-rounded-lg tw-inline-flex tw-items-center tw-justify-center tw-px-4 tw-py-2.5">
                                <svg className="tw-mr-2 tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" /></svg>
                                <div className="tw-text-left">
                                    <div className="tw--mt-1 tw-font-sans tw-text-sm tw-font-semibold">Subscribe</div>
                                </div>
                            </div>
                            <div className="tw-w-full sm:tw-w-auto tw-bg-red-800 hover:tw-bg-red-700 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-gray-300 tw-text-white tw-rounded-lg tw-inline-flex tw-items-center tw-justify-center tw-px-4 tw-py-2.5">
                                <svg className="tw-mr-2 tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
                                <div className="tw-text-left">
                                    <div className="tw--mt-1 tw-font-sans tw-text-sm tw-font-semibold">Withdraw</div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }) : 
                <div className="tw-text-center">
                    <Alert type="info" message={
                        <div><br/>
                            <div className="tw-font-medium">You've not subscribed to any series. Please click below to view active series.</div><br/>
                            <Button text="Active Series"
                                useIcon={true}
                                icon={
                                    <svg className="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
                                        <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z" />
                                    </svg>
                                }
                                onClickHandler={() => setActiveTab(seriesTypes.ACTIVE)}
                            />
                        </div>
                    }
                    />
                </div>
            }
        </div>
    );
}

export default SubscribedSeries;
