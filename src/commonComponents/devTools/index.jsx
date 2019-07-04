import React from 'react'
import ReactDom from 'react-dom';

const DevTools = () => {
    if (process.env.NODE_ENV !== "pro") {
        const DevTools = require("mobx-react-devtools").default;
        return <DevTools />;
    }
    return null
}

export default DevTools