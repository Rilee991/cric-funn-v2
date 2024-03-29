import React from 'react';
import { Link } from 'react-router-dom';

import cricFunnLogo from '../../../../resources/cricfunn.png';
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '../../../../resources/icons/Icons';

const BottomSection = () => {
    return (
        <footer className="tw-p-4 md:p-8 lg:p-10 bg-gray-800">
            <div className="tw-mx-auto tw-max-w-screen-xl tw-text-center">
                <Link to="/" className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-2xl tw-font-semibold tw-text-white">
                    <img src={cricFunnLogo} className="tw-w-[80px] tw-mr-2" />
                    Cric-Funn
                </Link>
                <p className="tw-my-6 tw-text-gray-300"><b>About the app:</b> Just a personalised fun web app, developed for people to enjoy with friends and have a good time on the platform.</p>
                <ul className="tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-mb-6 tw-text-white">
                    <li>
                        Liked the app? <a href="https://www.buymeacoffee.com/rohitkumark" className="tw-mr-4 hover:tw-underline md:tw-mr-6">Buy Me a Coffee</a>
                    </li>
                </ul>
                <ul className="tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-mb-6 tw-text-white">
                    <li>
                        Wanna connect?&nbsp;
                    </li>
                    <li className="tw-block">
                        <a href="https://www.linkedin.com/in/rohit-kumar-a92418141/">
                            <LinkedInIcon className="tw-w-10" />
                        </a>
                    </li>
                    <li className="tw-block">
                        <a href="https://www.facebook.com/StoneCypher33">
                            <FacebookIcon className="tw-w-10" />
                        </a>
                    </li>
                    <li className="tw-block">
                        <a href="https://twitter.com/IamRohitKumar22">
                            <TwitterIcon className="tw-w-10" />
                        </a>
                    </li>
                </ul>
                <span className="tw-text-sm sm:tw-text-center tw-text-gray-300">© 2021-2022 <a href="#" className="tw-hover:underline">Cric-Funn™.</a><br/> Designed and Created by Cypher33.</span>
            </div>
        </footer>
    );
}

export default BottomSection;
