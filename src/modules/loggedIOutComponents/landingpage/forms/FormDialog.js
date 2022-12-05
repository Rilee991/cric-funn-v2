import React, { useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

import { getExistingUsers } from '../../../../apis/usercontroller';
import { isEmpty } from 'lodash';

const FormDialog = (props) => {
	const { isFormDialogOpen, setIsFormDialogOpen } = props;

	const [isOpenLoginForm, setIsOpenLoginForm] = useState(true);
	const [existingUsers, setExistingUsers] = useState([]);

	useEffect(() => {
		getAllUsers();
	},[])

	const getAllUsers = async () => {
		if(isEmpty(existingUsers)) {
			const existingUsers = await getExistingUsers();
			setExistingUsers(existingUsers);
		}
	}

  	return (
		<Transition appear show={isFormDialogOpen}>
			<Dialog as="div" className="tw-relative tw-z-10" onClose={() => setIsFormDialogOpen(false)}>
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
                			{ isOpenLoginForm ? 
								<SignInForm
									setIsOpenLoginForm={setIsOpenLoginForm}
									setIsFormDialogOpen={setIsFormDialogOpen}
									existingUsers={existingUsers}
								/>
								: <SignUpForm
									setIsOpenLoginForm={setIsOpenLoginForm}
									setIsFormDialogOpen={setIsFormDialogOpen}
									existingUsers={existingUsers}
								/> 
							}
              			</Transition.Child>
            		</div>
          		</div>
        	</Dialog>
      </Transition>
  	);
}

export default FormDialog;
