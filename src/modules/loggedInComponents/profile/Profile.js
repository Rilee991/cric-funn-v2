import React from 'react';

const Profile = () => {
    return (
        <div>
            <section className="tw-relative tw-block tw-h-[500px]">
                <div className="tw-absolute tw-top-0 tw-w-full tw-h-full tw-bg-center tw-bg-cover" style={{"backgroundImage": "url(" + "https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80" + ")"}}>
                    <span id="blackOverlay" className="tw-w-full tw-h-full tw-absolute tw-opacity-50 tw-bg-black"></span>
                </div>
                <div className="tw-top-auto tw-bottom-0 tw-left-0 tw-right-0 tw-w-full tw-absolute tw-pointer-events-none tw-overflow-hidden tw-h-70-px" style={{"transform": "translateZ(0px)"}}>
                    <svg className="tw-absolute tw-bottom-0 tw-overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-blueGray-200 tw-fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section>
            <section className="tw-relative tw-py-16 bg-blueGray-200">
                <div className="tw-container tw-mx-auto tw-px-4">
                    <div className="tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-words tw-bg-white tw-w-full tw-mb-6 tw-shadow-xl tw-rounded-lg tw--mt-64">
                        <div className="tw-px-6">
                            <div className="tw-flex tw-flex-wrap tw-justify-center">
                                    <div className="tw-w-full lg:tw-w-3/12 tw-px-4 lg:tw-order-2 tw-flex tw-justify-center">
                                    <div className="tw-relative">
                                        <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="tw-shadow-xl tw-rounded-full tw-h-auto tw-align-middle tw-border-none tw-absolute tw--m-16 tw--ml-20 lg:tw--ml-16 max-w-150-px" />
                                    </div>
                                </div>
                                <div className="tw-w-full lg:tw-w-4/12 tw-px-4 lg:tw-order-3 lg:tw-text-right lg:tw-self-center">
                                    <div className="tw-py-6 tw-px-3 tw-mt-32 sm:tw-mt-0">
                                        <button className="tw-bg-pink-500 active:tw-bg-pink-600 tw-uppercase tw-text-white tw-font-bold hover:tw-shadow-md tw-shadow tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-outline-none focus:tw-outline-none sm:tw-mr-2 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150" type="button">
                                            Connect
                                        </button>
                                    </div>
                                </div>
                                <div className="tw-w-full lg:tw-w-4/12 tw-px-4 lg:tw-order-1">
                                    <div className="tw-flex tw-justify-center tw-py-4 lg:tw-pt-4 tw-pt-8">
                                        <div className="tw-mr-4 tw-p-3 tw-text-center">
                                            <span className="tw-text-xl tw-font-bold tw-block tw-uppercase tw-tracking-wide text-blueGray-600">22</span><span className="tw-text-sm text-blueGray-400">Friends</span>
                                        </div>
                                        <div className="tw-mr-4 tw-p-3 tw-text-center">
                                            <span className="tw-text-xl tw-font-bold tw-block tw-uppercase tw-tracking-wide text-blueGray-600">22</span><span className="tw-text-sm text-blueGray-400">Friends</span>
                                        </div>
                                        <div className="tw-mr-4 tw-p-3 tw-text-center">
                                            <span className="tw-text-xl tw-font-bold tw-block tw-uppercase tw-tracking-wide text-blueGray-600">22</span><span className="tw-text-sm text-blueGray-400">Friends</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tw-text-center tw-mt-12">
                                <h3 className="tw-text-4xl tw-font-semibold tw-leading-normal text-blueGray-700 tw-mb-2">
                                    Cypher Stone
                                </h3>
                                <div className="tw-text-sm tw-leading-normal tw-mt-0 tw-mb-2 text-blueGray-400 tw-font-bold tw-uppercase">
                                    <i className="tw-fas fa-map-marker-alt tw-mr-2 tw-text-lg text-blueGray-400"></i>
                                    Los Angeles, California
                                </div>
                                <div className="tw-mb-2 text-blueGray-600 tw-mt-10">
                                <i className="tw-fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Solution Manager - Creative Tim Officer
                                </div>
                                <div className="tw-mb-2 text-blueGray-600">
                                <i className="tw-fas fa-university mr-2 text-lg text-blueGray-400"></i>University of Computer Science
                                </div>
                            </div>
                            <div className="tw-mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="tw-flex flex-wrap justify-center">
                                <div className="tw-w-full lg:tw-w-9/12 px-4">
                                    <p className="tw-mb-4 text-lg leading-relaxed text-blueGray-700">
                                    An artist of considerable range, Jenna the name taken by
                                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                                    performs and records all of his own music, giving it a
                                    warm, intimate feel with a solid groove structure. An
                                    artist of considerable range.
                                    </p>
                                    <a href="#pablo" className="tw-font-normal text-pink-500">Show more</a>
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
                            Made with <a href="https://www.creative-tim.com/product/notus-js" className="tw-text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="tw-text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
                            </div>
                        </div>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    );
}

export default Profile;
