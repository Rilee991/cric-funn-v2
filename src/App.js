import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import Routes from './Routes';

const App = () => {
    return (
        <Router>
            <RecoilRoot>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes />
                </ Suspense>
            </RecoilRoot>
        </Router>
    );
}

export default App;
