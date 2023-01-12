import { Alert } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { getFormattedSeries, getSeriesList } from '../../../../../apis/cricdataController';
import { subscribeSeries, updateUserInDb } from '../../../../../apis/usercontroller';
import { userAtom } from '../../../../../store/userStore';

const ActiveSeries = () => {
    const [series, setSeries] = useState([]);
    const [user, setUser] = useRecoilState(userAtom);

    useEffect(() => {
        getAllSeries();
    }, [])

    const getAllSeries = async () => {
        // const series = await getSeriesList();
        const series = getFormattedSeries([
            {
            "id": "53d2aa5c-8ece-43a5-a779-e571a26c55c4",
            "name": "Ireland tour of England ODI Series, 2023",
            "startDate": "2023-09-20",
            "endDate": "Sep 26",
            "odi": 3,
            "t20": 0,
            "test": 0,
            "squads": 0,
            "matches": 3
            },
            {
            "id": "470b23ea-3810-49ff-9d3c-467f434a6bbf",
            "name": "Sri Lanka Women tour of England, 2023",
            "startDate": "2023-09-02",
            "endDate": "Sep 19",
            "odi": 3,
            "t20": 3,
            "test": 0,
            "squads": 0,
            "matches": 6
            },
            {
            "id": "e7fc5404-3053-4026-97bc-b2d24649d2bd",
            "name": "New Zealand tour of England, 2023",
            "startDate": "2023-08-30",
            "endDate": "Sep 15",
            "odi": 4,
            "t20": 4,
            "test": 0,
            "squads": 0,
            "matches": 8
            },
            {
            "id": "e484511b-4751-40c2-9b18-4abcbb76d314",
            "name": "Ireland tour of England Only Test, 2023",
            "startDate": "2023-06-01",
            "endDate": "Jun 04",
            "odi": 0,
            "t20": 0,
            "test": 1,
            "squads": 0,
            "matches": 1
            },
            {
            "id": "c059609d-19c0-4c11-9639-082a8db9f914",
            "name": "New Zealand tour of Pakistan, 2023",
            "startDate": "2023-04-13",
            "endDate": "May 07",
            "odi": 5,
            "t20": 5,
            "test": 0,
            "squads": 0,
            "matches": 10
            },
            {
            "id": "02ac344b-3fe0-4f75-8e3f-855ec59d2db0",
            "name": "Netherlands tour of South Africa, 2023",
            "startDate": "2023-03-31",
            "endDate": "Apr 02",
            "odi": 2,
            "t20": 0,
            "test": 0,
            "squads": 0,
            "matches": 2
            },
            {
            "id": "c00dbd54-38b1-4be6-ae07-5fa5e4d22440",
            "name": "Sri Lanka tour New Zealand, 2023",
            "startDate": "2023-03-08",
            "endDate": "Apr 08",
            "odi": 3,
            "t20": 3,
            "test": 2,
            "squads": 0,
            "matches": 8
            },
            {
            "id": "76415032-6cac-4946-83c3-eaaa8c7ca56c",
            "name": "England tour of Bangladesh, 2023",
            "startDate": "2023-03-01",
            "endDate": "Mar 14",
            "odi": 3,
            "t20": 3,
            "test": 0,
            "squads": 0,
            "matches": 6
            },
            {
            "id": "bcf9efa5-0d55-4b63-b583-aff617b05222",
            "name": "West Indies tour of South Africa, 2023",
            "startDate": "2023-02-28",
            "endDate": "Mar 28",
            "odi": 3,
            "t20": 3,
            "test": 2,
            "squads": 0,
            "matches": 8
            },
            {
            "id": "08aec6c1-125f-40b9-8bdf-1891016a9008",
            "name": "England tour of New Zealand, 2023",
            "startDate": "2023-02-16",
            "endDate": "Feb 28",
            "odi": 0,
            "t20": 0,
            "test": 2,
            "squads": 0,
            "matches": 2
            },
            {
            "id": "f2f02a29-5800-4b95-8774-b170cdbfd308",
            "name": "ICC Womens T20 World Cup 2023",
            "startDate": "2023-02-10",
            "endDate": "Feb 26",
            "odi": 0,
            "t20": 23,
            "test": 0,
            "squads": 0,
            "matches": 20
            },
            {
            "id": "8087933a-cd0b-4adc-b7b9-a00c1dc75eb2",
            "name": "Australia tour of India, 2023",
            "startDate": "2023-02-09",
            "endDate": "Mar 22",
            "odi": 3,
            "t20": 0,
            "test": 4,
            "squads": 0,
            "matches": 7
            },
            {
            "id": "c5783d8f-4336-4679-9010-90b86d105938",
            "name": "West Indies tour of Zimbabwe, 2023",
            "startDate": "2023-02-04",
            "endDate": "Feb 16",
            "odi": 0,
            "t20": 0,
            "test": 2,
            "squads": 0,
            "matches": 2
            },
            {
            "id": "f0225e41-4ead-4a07-82be-711fd6ccd4e9",
            "name": "England tour of South Africa, 2023",
            "startDate": "2023-01-27",
            "endDate": "Feb 01",
            "odi": 3,
            "t20": 0,
            "test": 0,
            "squads": 0,
            "matches": 3
            },
            {
            "id": "a97e447c-48f1-47dd-9874-df01ee948dec",
            "name": "Womens T20I Tri-Series in South Africa 2023",
            "startDate": "2023-01-19",
            "endDate": "Feb 02",
            "odi": 0,
            "t20": 7,
            "test": 0,
            "squads": 0,
            "matches": 6
            },
            {
            "id": "9d9e4ce5-9683-4d01-9891-c0940557c405",
            "name": "New Zealand tour of India, 2023",
            "startDate": "2023-01-18",
            "endDate": "Feb 01",
            "odi": 3,
            "t20": 3,
            "test": 0,
            "squads": 0,
            "matches": 6
            },
            {
            "id": "fc9f69cc-6b64-422b-9676-0dc9d5e26580",
            "name": "Pakistan Women tour of Australia, 2023",
            "startDate": "2023-01-16",
            "endDate": "Jan 29",
            "odi": 3,
            "t20": 3,
            "test": 0,
            "squads": 0,
            "matches": 6
            },
            {
            "id": "aff508e4-ff16-441c-8c3e-ac876cdb98bf",
            "name": "ICC Under 19 Womens T20 World Cup 2023",
            "startDate": "2023-01-14",
            "endDate": "Jan 29",
            "odi": 0,
            "t20": 41,
            "test": 0,
            "squads": 0,
            "matches": 24
            },
            {
            "id": "a27bd920-9b07-4c46-8b67-aaf6b81b7f5e",
            "name": "Ireland tour of Zimbabwe, 2023",
            "startDate": "2023-01-12",
            "endDate": "Jan 23",
            "odi": 3,
            "t20": 3,
            "test": 0,
            "squads": 0,
            "matches": 6
            },
            {
            "id": "9ee27942-3859-4b48-bc0c-954694117f28",
            "name": "SA20, 2023",
            "startDate": "2023-01-10",
            "endDate": "Feb 11",
            "odi": 0,
            "t20": 33,
            "test": 0,
            "squads": 0,
            "matches": 30
            },
            {
            "id": "c05482f4-1ee5-41c5-b2f7-9b60eb270698",
            "name": "Bangladesh Premier League 2023",
            "startDate": "2023-01-06",
            "endDate": "Feb 16",
            "odi": 0,
            "t20": 46,
            "test": 0,
            "squads": 0,
            "matches": 42
            },
            {
            "id": "e8528bc5-309b-4640-bcbd-3cb31941ff98",
            "name": "Sri Lanka tour of India, 2023",
            "startDate": "2023-01-03",
            "endDate": "Jan 15",
            "odi": 3,
            "t20": 3,
            "test": 0,
            "squads": 0,
            "matches": 6
            },
            {
            "id": "fba50f1a-0d29-44e7-af59-f0ebcb50ffb4",
            "name": "New Zealand tour of Pakistan, 2022-23",
            "startDate": "2022-12-27",
            "endDate": "Jan 13",
            "odi": 3,
            "t20": 0,
            "test": 2,
            "squads": 0,
            "matches": 5
            },
            {
            "id": "3be89e8f-6fbc-483c-b4bb-b73fde55733f",
            "name": "India Women Under-19s tour of South Africa, 2022-23",
            "startDate": "2022-12-27",
            "endDate": "Jan 04",
            "odi": 0,
            "t20": 5,
            "test": 0,
            "squads": 0,
            "matches": 6
            },
            {
            "id": "5f9c3c16-002e-485f-89f0-584ec832ae4f",
            "name": "Super Smash 2022-23",
            "startDate": "2022-12-23",
            "endDate": "Feb 11",
            "odi": 0,
            "t20": 32,
            "test": 0,
            "squads": 0,
            "matches": 30
            }
        ]);
        setSeries(series);
    }

    const onClickSubscribe = async (series) => {
        // await updateUserInDb(user.username, { subscribedSeries: [ ...user.subscribedSeries, series ] });
        await subscribeSeries(user, series);
        // Create series in db
        // Update in user obj
    }

    return (
        <div>
            {series.length ? series.map(e => {
                const isExpiredSeries = moment().isSameOrAfter(moment(e.startDate));
                const isSubscribedSeries = user.subscribedSeries ? user.subscribedSeries.some(item => item.id == e.id) : false;

                const canWithdraw = !isExpiredSeries && isSubscribedSeries;
                const canSubscribe = !isExpiredSeries && !isSubscribedSeries;

                return (
                    <div className={`tw-mb-4 tw-w-full tw-p-4 tw-text-center tw-bg-gradient-to-r ${e.from || "tw-from-gray-600"} ${e.to || "tw-to-amber-900"} tw-border tw-rounded-lg tw-shadow-md sm:tw-p-8`}>
                        <h5 className="tw-mb-2 tw-text-3xl tw-font-bold tw-text-gray-200">{e.name}</h5>
                        <p className="tw-mb-1 tw-text-base tw-text-gray-200 sm:tw-text-lg">{`${e.test ? e.test + " Tests." : ""}`} {`${e.odi ? e.odi + " ODIs." : ""}`} {`${e.t20 ? e.t20 + " T20s." : ""}`}</p>
                        <p className="tw-mb-5 tw-text-sm tw-text-gray-200 sm:tw-text-base">Starts On {moment(e.startDate).format("dddd DD MMMM, YYYY")}</p>
                        { canSubscribe || canWithdraw ?
                                <div className="tw-cursor-pointer tw-items-center tw-justify-center tw-space-y-4 sm:tw-flex sm:tw-space-y-0 sm:tw-space-x-4">
                                    <button onClick={() => onClickSubscribe(e)} disabled={!canSubscribe} className="disabled:tw-bg-slate-600 tw-cursor-pointer tw-border-white tw-border-[1.2px] tw-w-full sm:tw-w-auto tw-bg-blue-800 hover:tw-bg-blue-700 focus:tw-ring-1 focus:tw-outline-none focus:tw-ring-gray-300 tw-text-white tw-rounded-lg tw-inline-flex tw-items-center tw-justify-center tw-px-4 tw-py-2.5">
                                        <svg className="tw-mr-2 tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" /></svg>
                                        <div className="tw-text-left">
                                            <div className="tw--mt-1 tw-font-sans tw-text-sm tw-font-semibold">Subscribe</div>
                                        </div>
                                    </button>
                                    <button disabled={!canWithdraw} onClick={() => console.log("click")} className="disabled:tw-bg-slate-600 tw-cursor-pointer tw-border-whte tw-border-[1.2px] tw-w-full sm:tw-w-auto tw-bg-red-800 hover:tw-bg-red-700 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-gray-300 tw-text-white tw-rounded-lg tw-inline-flex tw-items-center tw-justify-center tw-px-4 tw-py-2.5">
                                        <svg className="tw-mr-2 tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z"></path>
                                            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zm5.22 1.72a.75.75 0 011.06 0L10 10.94l1.72-1.72a.75.75 0 111.06 1.06L11.06 12l1.72 1.72a.75.75 0 11-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 01-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 010-1.06z"></path>
                                        </svg>
                                        <div className="tw-text-left">
                                            <div className="tw--mt-1 tw-font-sans tw-text-sm tw-font-semibold">Withdraw</div>
                                        </div>
                                    </button>
                                </div>
                            :   <div className="tw-cursor-pointer tw-items-center tw-justify-center tw-space-y-4 sm:tw-flex sm:tw-space-y-0 sm:tw-space-x-4">
                                    <button disabled={true} className="disabled:tw-bg-slate-600 tw-cursor-pointer tw-border-whte tw-border-[1.2px] tw-w-full sm:tw-w-auto tw-bg-gray-800 hover:tw-bg-gray-700 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-gray-300 tw-text-white tw-rounded-lg tw-inline-flex tw-items-center tw-justify-center tw-px-4 tw-py-2.5">
                                        <svg className="tw-mr-2 tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
                                        <div className="tw-text-left">
                                            <div className="tw--mt-1 tw-font-sans tw-text-sm tw-font-semibold">{isSubscribedSeries ? "Subscribed!" : "Expired!" }</div>
                                        </div>
                                    </button>
                                </div>
                        }
                    </div>
                );
            }) : 
                <div className="tw-text-center">
                    <Alert type="info" message={
                        <div><br/>
                            <div className="tw-font-medium">No active series right now. Please come back after sometime.</div><br/>
                        </div>
                    }
                    />
                </div>
            }
        </div>
    );
}

export default ActiveSeries;


