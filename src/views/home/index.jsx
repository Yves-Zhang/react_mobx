import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                hello world!
                <div>
                    <ul>
                        <li>
                            <Link to="/demoOne">demoOne</Link>
                        </li>
                        <li>
                            <Link to="/demoTwo">demoTwo</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    {this.props.viewComp}
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Home;