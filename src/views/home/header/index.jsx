import React, { useState } from 'react'

import './style.less'

const Header = () => {
    const [state, setState] = useState({
        text: "",
        checked: false
    });

    return (
        <div className="headerContent">

        </div>
    );
}

export default Header

