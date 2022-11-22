import React, { Suspense } from 'react';
import { isEmpty } from 'lodash';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import './App.css';

import LoggedInComponent from './components/LoggedInComponent/LoggedInComponent';
import LoggedOutComponent from './components/LoggedIOutComponent/LoggedOutComponent';

const App = () => {
    const employeeDetails = {};

    return (
        <Router>
            <RecoilRoot>
                <Suspense fallback={<div>Loading...</div>}>
                {
                    !isEmpty(employeeDetails) ? <LoggedInComponent /> : <LoggedOutComponent />
                }
                {/* <Route exact path="/">
                    <Auth/> 
                </Route> 
                <Route exact path="/bets">
                    <MyBets/> 
                </Route>
                <Route exact path="/points-table">
                    <PointsTable exact />
                </Route>
                <Route exact path="/admin">
                    <Admin exact />
                </Route>
                <Route exact path="/points">
                    <Graph exact />
                </Route>
                <Route exact path="/global-stats">
                    <GlobalStats exact />
                </Route> */}
                </ Suspense>
            </RecoilRoot>
        </Router>
    );
}

export default App;
