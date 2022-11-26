import React from 'react';

const Button = (props) => {
    const { buttonText = "" } = props;

    return (
        <button className="tw-mx-4 tw-h-10 tw-w-44 tw-rounded-md tw-text-white tw-text-base 
            tw-bg-indigo-700 hover:tw-bg-indigo-800 focus:tw-outline-none focus:tw-ring-2
            focus:tw-ring-opacity-50 focus:tw-ring-indigo-800"
        >
            {buttonText || "Enter"}
        </button>
    );
}

export default Button;
