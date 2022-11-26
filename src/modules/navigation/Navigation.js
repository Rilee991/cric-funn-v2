import React from 'react';
import { useRecoilValue } from 'recoil';

import { getProducts } from '../../store/userStore';

const Navigation = () => {
    const productsBody = useRecoilValue(getProducts);

    return (
        <>
            <div className="tw-text-lg">Navigation</div>
            {productsBody.body.map(p => (
                <div key={p.id}>{p.title}</div>
            ))}
        </>
    );
}

export default Navigation;
