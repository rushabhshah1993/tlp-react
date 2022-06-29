import React from 'react';

const WarningBanner = props => {
    if(!props.warn) return null;

    return (
        <h1>WARNING!</h1>
    )
}

export default WarningBanner;