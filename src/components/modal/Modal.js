import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CloseOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const Modal = (props) => {
    const { isModalOpen, onCloseModal, title = "Sample Title", children } = props;

    return (
        <Transition appear show={isModalOpen}>
			<Dialog as="div" className="tw-relative tw-z-10" onClose={onCloseModal}>
				<Transition.Child
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
            		<div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50" />
          		</Transition.Child>

				<div className="tw-fixed tw-inset-0 tw-overflow-y-auto">
					<div className="tw-flex tw-drop-shadow-2xl tw-min-h-full tw-items-center tw-justify-center tw-p-4 tw-text-center">
						<Transition.Child
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
							className="tw-w-full tw-flex tw-justify-center"
						>
                			{/* Modal Content */}
                            <Dialog.Panel className="tw-w-full tw-max-w-md tw-transform tw-overflow-hidden tw-rounded-2xl tw-bg-white tw-p-6 tw-text-left tw-align-middle tw-shadow-xl tw-transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="tw-border-b-2 tw-flex tw-justify-between tw-border-gray-200 tw-mb-2 tw-border-solid tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900"
                                >
                                    <div>{title}</div>
                                    <div className="tw-cursor-pointer" onClick={onCloseModal}> <CloseOutlined /> </div>
                                </Dialog.Title>
                                { children }
                            </Dialog.Panel>
              			</Transition.Child>
            		</div>
          		</div>
        	</Dialog>
        </Transition>
    );
}

Modal.propTypes = {
    isModalOpen: PropTypes.bool,
    onCloseModal: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.any
};

Modal.defaultProps = {
    isModalOpen: false,
    onCloseModal: () => { console.log(`Close sample modal`) },
    title: `Sample Title`,
    children: <div>Sample Content</div>
};

export default Modal;
