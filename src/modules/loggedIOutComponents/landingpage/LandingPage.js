import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TopSection from './sections/TopSection';
import FormDialog from './forms/FormDialog';
import MiddleSection from './sections/MiddleSection';
import BottomSection from './sections/BottomSection';

const LandingPage = () => {
    const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);

    return (
        <section className="tw-bg-gray-900 tw-min-h-screen">
            <TopSection setIsFormDialogOpen={setIsFormDialogOpen} />
            <br />
            <MiddleSection setIsFormDialogOpen={setIsFormDialogOpen} />
            <br />
            <hr />
            <br />
            <BottomSection />
            <ToastContainer />
            { <FormDialog isFormDialogOpen={isFormDialogOpen} setIsFormDialogOpen={setIsFormDialogOpen} /> }
        </section>
    );
}

export default LandingPage;
