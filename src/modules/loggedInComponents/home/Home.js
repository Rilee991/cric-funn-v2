import React, { useState } from 'react';

import { tournamentTypes } from '../../../common/enum';
import ActiveTournaments from './tabs/active/ActiveTournaments';
import SubscribedTournaments from './tabs/subcribed/SubscribedTournaments';

const Home = () => {
    const [activeTab, setActiveTab] = useState(tournamentTypes.SUBSCRIBED);

    return (
        <div className="tw-border-gray-300">
            {/* Tab Header */}
            <ul className={`tw-cursor-pointer tw-flex tw-w-full tw-flex-wrap tw-mb-3 tw-text-sm tw-font-medium tw-justify-evenly tw-text-center`}>
                <li style={{ transition: "border-bottom 0.5s ease-out"}} className={`tw-w-1/2 tw-border-b-2 tw-border-r-2 ${activeTab === tournamentTypes.SUBSCRIBED ? "tw-text-gray-900 tw-border-b-gray-900 tw-border-b-4" : "tw-text-gray-400"}`} onClick={() => setActiveTab(tournamentTypes.SUBSCRIBED)}>
                    <div href="#" className="tw-inline-flex tw-p-4 tw-rounded-t-lg tw-border-b-2 tw-border-transparent hover:tw-text-gray-600 tw-group">
                        <svg className="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        Subscribed
                    </div>
                </li>
                <li style={{ transition: "border-bottom 0.5s ease-out"}} className={`tw-w-1/2 tw-border-b-2 ${activeTab === tournamentTypes.ACTIVE ? "tw-text-gray-900 tw-border-b-gray-900 tw-border-b-4" : "tw-text-gray-400"}`} onClick={() => setActiveTab(tournamentTypes.ACTIVE)}>
                    <div href="#" className="tw-inline-flex tw-p-4 tw-rounded-t-lg tw-border-b-2 tw-border-transparent hover:tw-text-gray-600 tw-group">
                        <svg className="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" /><path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z" /></svg>
                        Active
                    </div>
                </li>
            </ul>

            {/* Tab Body */}
            { activeTab === tournamentTypes.SUBSCRIBED ? <SubscribedTournaments /> : <ActiveTournaments /> }
        </div>
    );
}

export default Home;
