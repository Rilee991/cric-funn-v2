import React from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import { CricFunnImage } from '../../resources/icons/Icons';

import './Drawer.scss';

const Drawer = (props) => {
    const { openDrawer, setOpenDrawer } = props;

    return (
        <div>
            <Offcanvas className="tw-w-4/5 sm:tw-w-1/3 tw-bg-gray-800" isOpen={openDrawer} toggle={() => setOpenDrawer(!openDrawer)} scrollable={false}>
                <OffcanvasHeader toggle={() => setOpenDrawer(!openDrawer)}>
                    <div className="tw-flex tw-items-center tw-text-white">
                        <CricFunnImage className="tw-h-8 sm:tw-h-12 tw-mr-3" />
                        
                            <div className="tw-self-center tw-text-white tw-text-lg tw-font-semibold tw-whitespace-nowrap">Cric-Funn</div>
                            <button onClick={() => setOpenDrawer(false)} type="button" className="tw-text-gray-400 tw-text-lg tw-font-semibold tw-bg-transparent tw-rounded-lg tw-p-1.5 tw-absolute tw-right-2.5 tw-inline-flex tw-items-center hover:tw-bg-gray-600 hover:tw-text-white" >
                                <svg aria-hidden="true" className="tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>  
                            </button>
                    </div>
                    <h5 className="tw-text-base tw-font-semibold tw-text-gray-200 tw-uppercase tw-mt-4">Menu</h5>
                </OffcanvasHeader>
                <hr className="tw-text-white tw-m-0 tw-h-[2px] tw-bg-white" />

                <OffcanvasBody>
                    <ul className="tw-space-y-1 tw-contents">
                        <li>
                            <div className="tw-flex tw-cursor-pointer tw-items-center tw-p-2 tw-text-base tw-font-normal tw-rounded-lg tw-text-white hover:tw-bg-gray-700">
                            <svg className="tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" /></svg>
                                <span className="tw-ml-3">Tournaments</span>
                            </div>
                        </li>
                        <li>
                            <div className="tw-flex tw-cursor-pointer tw-items-center tw-p-2 tw-text-base tw-font-normal tw-rounded-lg tw-text-white hover:tw-bg-gray-700">
                                <svg className="tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
                                <span className="tw-ml-3">Dashboard</span>
                            </div>
                        </li>
                        <li>
                            <div className="tw-flex tw-cursor-pointer tw-items-center tw-p-2 tw-text-base tw-font-normal tw-rounded-lg tw-text-white hover:tw-bg-gray-700">
                                <svg className="tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                                <span className="tw-ml-3">Profile</span>
                            </div>
                        </li>
                        <li>
                            <div className="tw-flex tw-cursor-pointer tw-items-center tw-p-2 tw-text-base tw-font-normal tw-rounded-lg tw-text-white hover:tw-bg-gray-700">
                            <svg className="tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg>
                            <span className="tw-ml-3">Logout</span>
                            </div>
                        </li>
                    </ul>
                </OffcanvasBody>
            </Offcanvas>
        </div>
    );
}

export default Drawer;
