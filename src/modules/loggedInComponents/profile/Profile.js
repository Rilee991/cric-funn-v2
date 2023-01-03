import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import { getProfileDateFromFirebase } from '../../../common/utils';
import { userAtom } from '../../../store/userStore';

import EditProfileModal from './EditProfileModal';

const Profile = () => {
    const [user, setUser] = useRecoilState(userAtom);
    const [openEditModal, setOpenEditModal] = useState(false);

    return (
        <div>
            <div className="tw-relative tw-block tw-h-[500px] -tw-z-10">
                <div className="tw-absolute tw-top-0 tw-w-full tw-h-full tw-bg-center tw-bg-cover" style={{"backgroundImage": "url(" + "https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80" + ")"}}>
                    <span id="blackOverlay" className="tw-w-full tw-h-full tw-absolute tw-opacity-30 tw-bg-black"></span>
                </div>
                <div className="tw-top-auto tw-bottom-0 tw-left-0 tw-right-0 tw-w-full tw-absolute tw-pointer-events-none tw-overflow-hidden tw-h-70-px" style={{"transform": "translateZ(0px)"}}>
                    <svg className="tw-absolute tw-bottom-0 tw-overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-blueGray-200 tw-fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </div>
            <section className="tw-relative tw-py-16 bg-blueGray-200">
                <div className="tw-container tw-mx-auto tw-px-4">
                    <div className="tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-words tw-bg-white tw-w-full tw-mb-6 tw-shadow-xl tw-rounded-lg tw--mt-64">
                        <div className="tw-px-6">
                            <div className="tw-flex tw-flex-wrap tw-justify-center">
                                    <div className="tw-w-full lg:tw-w-3/12 tw-px-4 lg:tw-order-2 tw-flex tw-justify-center">
                                        <div className="tw-relative">
                                            <img alt="..." src={user.profilePic} className="tw-shadow-xl tw-rounded-full tw-h-auto tw-align-middle tw-border-none tw-absolute tw--m-16 tw--ml-20 lg:tw--ml-16 max-w-150-px" />
                                        </div>
                                    </div>
                                <div className="tw-w-full tw-flex tw-items-center tw-justify-end lg:tw-w-4/12 tw-px-4 lg:tw-order-3 lg:tw-text-right lg:tw-self-center">
                                    <div className="tw-py-6 tw-px-3 tw-mt-32 sm:tw-mt-0">
                                        <button className="tw-bg-blue-500 active:tw-bg-blue-600 tw-uppercase tw-text-white tw-font-bold hover:tw-shadow-md tw-shadow tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-outline-none focus:tw-outline-none sm:tw-mr-2 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150" type="button">
                                            Follow
                                        </button>
                                    </div>
                                    <div onClick={() => setOpenEditModal(true)} className="tw-cursor-pointer tw-py-6 tw-px-3 tw-mt-32 sm:tw-mt-0">
                                        <svg className="tw-w-6 tw-h-6" fill="blue" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
                                    </div>
                                </div>
                                <div className="tw-w-full lg:tw-w-4/12 tw-px-4 lg:tw-order-1">
                                    <div className="tw-flex tw-justify-center tw-py-4 lg:tw-pt-4 tw-pt-8">
                                        <div className="tw-mr-4 tw-p-3 tw-text-center">
                                            <span className="tw-text-xl tw-font-bold tw-block tw-uppercase tw-tracking-wide text-blueGray-600">22</span><span className="tw-text-sm text-blueGray-400">Bets</span>
                                        </div>
                                        <div className="tw-mr-4 tw-p-3 tw-text-center">
                                            <span className="tw-text-xl tw-font-bold tw-block tw-uppercase tw-tracking-wide text-blueGray-600">22</span><span className="tw-text-sm text-blueGray-400">Won</span>
                                        </div>
                                        <div className="tw-mr-4 tw-p-3 tw-text-center">
                                            <span className="tw-text-xl tw-font-bold tw-block tw-uppercase tw-tracking-wide text-blueGray-600">22</span><span className="tw-text-sm text-blueGray-400">Lost</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tw-text-center tw-mt-12">
                                <h3 className="tw-text-4xl tw-font-semibold tw-leading-normal text-blueGray-700 tw-mb-2">
                                    <span className="tw-flex tw-justify-center tw-items-center">
                                        {user.name || `No Name`}
                                        <svg className="tw-w-8 tw-h-8" fill="blue" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    </span>
                                </h3>
                                <div className="tw-mb-2 text-blueGray-600 tw-mt-10 tw-flex tw-items-center tw-justify-center">
                                    <svg className="tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" /><path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" /></svg>
                                    Joined on {getProfileDateFromFirebase(user.createdAt)}
                                </div>
                            </div>
                            <div className="tw-mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="tw-flex flex-wrap justify-center">
                                <div className="tw-w-full lg:tw-w-9/12 px-4">
                                    <p className="tw-mb-4 text-lg leading-relaxed text-blueGray-700">
                                        {user.bio || `Update a cool bio to show`}
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="tw-relative bg-blueGray-200 pt-8 pb-6 mt-8">
                    <div className="tw-container mx-auto px-4">
                        <div className="tw-flex flex-wrap items-center md:justify-between justify-center">
                        <div className="tw-w-full md:w-6/12 px-4 mx-auto text-center">
                            <div className="tw-text-sm text-blueGray-500 font-semibold py-1">
                            Made with <a href="https://www.creative-tim.com/product/notus-js" className="tw-text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://twitter.com/IamRohitKumar22" className="tw-text-blueGray-500 hover:text-blueGray-800" target="_blank"> Cypher Stone</a>.
                            </div>
                        </div>
                        </div>
                    </div>
                </footer>
            </section>
            { openEditModal ? 
                <EditProfileModal
                    user={user}
                    openEditModal={openEditModal}
                    setOpenEditModal={setOpenEditModal}
                    setUser={setUser}
                />
                : null
            }
        </div>
    );
}

export default Profile;
