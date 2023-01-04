import React, { useState } from 'react';
import { Spin } from 'antd';
import moment from 'moment';

import { updateUserInDb } from '../../../apis/usercontroller';

import Button from '../../../components/Button';
import Modal from '../../../components/modal/Modal';
import { getStorageFileLink } from '../../../apis/uploadFileController';

const EditProfileModal = (props) => {
    const { openEditModal, setOpenEditModal, user, setUser } = props;

    const [isLoading, setIsLoading] = useState(false);
    const [formVals, setFormVals] = useState({
        name: user.name,
        bio: user.bio || "",
        profilePic: user.profilePic
    });
    const [file, setFile] = useState();

    const onChangeHandler = (event) => {
        let { name, value } = event.target;

        if(name == "profilePic") {
            if(!event.target.files || event.target.files.length == 0) {
                value = user.profilePic;
            } else {
                value = URL.createObjectURL(event.target.files[0]);
                setFile(event.target.files[0]);
            }
        }

        setFormVals({
            ...formVals,
            [name]: value
        });
    }

    const onClickSaveProfile = async () => {
        setIsLoading(true);
        try {
            const filePath = `profilePic/${user.username}/${moment().valueOf()}`;
            const profilePic = await getStorageFileLink(file, filePath);

            await updateUserInDb(user.username, { ...formVals, profilePic });
            setUser({ ...user, ...formVals, profilePic });
        } catch (e) {
            console.log(e.message);
        }
        setOpenEditModal(false);
        setIsLoading(false);
    }

    return (
        <Modal isModalOpen={openEditModal} onCloseModal={() => setOpenEditModal(false)} title="Edit your profile">
            <Spin spinning={isLoading} tip="Updating your details...">
                <div className="tw-space-y-6">
                    <br/>
                    <div className="tw-flex tw-justify-center">
                        <label htmlFor="image-input">
                            <img src={formVals.profilePic} className="tw-w-44 tw-shadow-xl tw-rounded-full tw-h-auto tw-align-middle tw-border-none"/>
                        </label>
                        <input className="tw-hidden" name="profilePic" id="image-input" type="file" onChange={onChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="name" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900">Name</label>
                        <input onChange={onChangeHandler} value={formVals.name} type="name" name="name" id="name" className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5" placeholder="Tony Stark" />
                    </div>
                    <div>
                        <label htmlFor="bio" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900">Bio</label>
                        <input onChange={onChangeHandler} value={formVals.bio} type="bio" name="bio" id="bio" className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5" placeholder="DM for collab" />
                    </div>
                
                    <Button
                        useIcon={false}
                        text={"Save"}
                        onClickHandler={onClickSaveProfile}
                        className="tw-w-full tw-text-white tw-bg-blue-700 disabled:tw-bg-gray-400 hover:tw-bg-blue-800 focus:tw-ring-2 focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center tw-mr-2 tw-justify-center tw-inline-flex tw-items-center"
                    />
                </div>
            </Spin>
        </Modal>
  	);
}

export default EditProfileModal;
