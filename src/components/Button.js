import React from 'react';
import PropTypes from 'prop-types';

import { DefaultIcon } from '../resources/icons/Icons';

const Button = (props) => {
    const { text, icon, onClickHandler } = props;

    return (
        <button className="tw-inline-flex tw-items-center tw-justify-center tw-px-5 tw-py-3 tw-text-base tw-font-medium tw-text-center
            tw-border tw-border-gray-700 tw-rounded-lg tw-bg-blue-700 focus:tw-ring-1 focus:tw-ring-gray-600 tw-text-white
            hover:tw-bg-indigo-700 tw-transition-colors tw-duration-700 tw-transform" onClick={onClickHandler}
        >
            {text}&nbsp;{icon}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.element,
    onClickHandler: PropTypes.func
};

Button.defaultProps = {
    text: "Enter Text",
    icon: <DefaultIcon className="tw-w-6 tw-h-6" />,
    onClickHandler: () => { console.log(`Button clicked!`); }
};

export default Button;
