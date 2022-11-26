import React, { Suspense } from 'react';
import { isEmpty } from 'lodash';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import './App.css';

import LoggedInComponents from './modules/loggedInComponents/LoggedInComponent';
import LoggedOutComponentRoutes from './modules/loggedIOutComponents/LoggedOutComponentRoutes';

const App = () => {
    const employeeDetails = {};

    return (
        <Router>
            <RecoilRoot>
                <Suspense fallback={<div>Loading...</div>}>
                {
                    !isEmpty(employeeDetails) ? <LoggedInComponents /> : <LoggedOutComponentRoutes />
                }
                </ Suspense>
            </RecoilRoot>
        </Router>
    );
}

export default App;
