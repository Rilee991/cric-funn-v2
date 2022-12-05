import React, { useEffect, useState } from 'react'
import { isEmpty } from 'lodash';
import LoadingScreen from 'react-loading-screen';
import { useRecoilState } from 'recoil';

import LoggedInComponentRoutes from './modules/loggedInComponents/LoggedInComponentRoutes';
import LoggedOutComponentRoutes from './modules/loggedIOutComponents/LoggedOutComponentRoutes';
import CricFunnLogo from './resources/cricfunn.png';

import { userAtom } from './store/userStore';
import { auth } from './firebase/config';
import { getUserByKey } from './apis/usercontroller';

const Routes = () => {
    const [user, setUser] = useRecoilState(userAtom);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged(handleAuthStateChange);
    },[]);

    const handleAuthStateChange = async (user) => {
        setIsLoading(true);

        try {
            if(user) {
                const userSnapshot = await getUserByKey("username", user.displayName); 
                const userDetails = !isEmpty(userSnapshot.docs) ? userSnapshot.docs[0].data() : {};

                setUser(userDetails);
            }
        } catch (e) {
            console.log(e.message);
        }
        
        setIsLoading(false);
    }

    return (
        <LoadingScreen
            loading={isLoading}
            bgColor="rgb(17,24,39)"
            spinnerColor="#fff"
            textColor="#fff"
            text="Loading your details. Please wait..."
            logoSrc={CricFunnLogo}
        >
            { !isEmpty(user) ? <LoggedInComponentRoutes /> : <LoggedOutComponentRoutes /> }
        </LoadingScreen>
    );
}

export default Routes;
