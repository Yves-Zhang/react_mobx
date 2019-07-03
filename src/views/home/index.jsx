import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { BrowserRouter, HashRouter, Router, Switch, Route, Redirect } from 'react-router-dom';

import './style.less'

import Header from './header'

// const routes = [
//     { path: '/',
//         exact: true,
//         component: Home,
//     },
//     {
//         path: '/login',
//         component: Login,
//     },
//     {
//         path: '/user',
//         component: User,
//     },
//     {
//         path: '*',
//         component: NotFound
//     }
// ]

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="homeContent">
                
                <Header />  
                {/* <Switch>
                    {renderRoutes(routes)}
                </Switch> */}
            </div>
        )
    }
}

export default Home;