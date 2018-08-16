import React from 'react';

import classes from './Spinner.css';

const Spinner = () => (
    <div className="loader-container">
        <svg
            className={classes.loader}
            width="65px"
            height="65px"
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                className={classes.path}
                fill="none"
                stroke-width="6"
                stroke-linecap="round"
                cx="33"
                cy="33"
                r="30"
            />
        </svg>
    </div>
);

export default Spinner;
