import React, { useState } from 'react';

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
            <MiddleSection />
            <br />
            <hr />
            <br />
            <BottomSection />
            { <FormDialog isFormDialogOpen={isFormDialogOpen} setIsFormDialogOpen={setIsFormDialogOpen} /> }
        </section>
    );
}

export default LandingPage;
