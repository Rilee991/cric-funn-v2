import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useHistory } from 'react-router';

import { getProfileDateFromFirebase } from '../../../common/utils';
import { auth } from '../../../firebase/config';
import { EditIcon, LogoutIcon } from '../../../resources/icons/Icons';

const ProfileDropdown = (props) => {
    const { user, setUser } = props;
    const history = useHistory();

    const onHoverClasses = "tw-bg-gray-900 tw-text-white";
    
    const menuItems = [{
        label: window.screen.width < 640 ? `@${user.username}` : "Profile",
        icon: <EditIcon className="tw-mr-1 tw-h-5 tw-w-5" aria-hidden="true"/>
    }];

    const onClickLogout = async () => {
        await auth.signOut();
        setUser({});
    }

    const onClickProfile = () => {
        history.push("/profile");
    }

    return (
        <div>
            <Menu as="div" className="tw-relative tw-text-left">
                <div>
                    <Menu.Button className="tw-space-x-2 tw-items-center tw-flex tw-w-full tw-justify-center tw-bg-opacity-20 tw-text-white focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-white focus-visible:tw-ring-opacity-75">
                        <img className="tw-cursor-pointer tw-w-10 tw-h-10 tw-rounded-full" src={user.profilePic} alt="" />
                            <div className="tw-hidden sm:tw-block tw-text-gray-200 tw-cursor-pointer">
                                <div className="tw-font-medium tw-text-left">@{user.username}</div>
                                <div className="tw-text-sm tw-text-gray-200 tw-inline-block tw-whitespace-nowrap tw-overflow-hidden tw-text-ellipsis">Joined in {getProfileDateFromFirebase(user.createdAt)}</div>
                            </div>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="tw-font-mono tw-absolute tw-right-0 tw-w-48 tw-origin-top-right tw-divide-y tw-divide-gray-300 tw-rounded-md tw-bg-white tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none">
                        <div className="tw-px-1 tw-py-1">
                            {menuItems.map((item, idx) => (
                                <Menu.Item key={idx}>
                                    {({ active }) => (
                                        <button onClick={onClickProfile} className={`${ active ? onHoverClasses : 'tw-text-gray-900'} tw-group tw-flex tw-w-full tw-items-center tw-rounded-md tw-px-2 tw-py-2 tw-text-sm`}>
                                            {item.icon}
                                            {item.label}
                                        </button>
                                    )}
                                </Menu.Item>
                            ))}
                        </div>
                        <div className="tw-px-1 tw-py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button onClick={onClickLogout} className={`${ active ? onHoverClasses : 'tw-text-gray-900'} tw-group tw-flex tw-w-full tw-items-center tw-rounded-md tw-px-2 tw-py-2 tw-text-sm`}>
                                        { <LogoutIcon className="tw-mr-1 tw-h-5 tw-w-5" /> }
                                        {"Logout"}
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}

export default ProfileDropdown;
