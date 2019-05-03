import React from 'react';
import { BrowserRouter, HashRouter, Router, Switch, Route } from 'react-router-dom';
import nav from './nav';

class RouterConfig extends React.Component {
    constructor(props) {
        super(props)
    }

    createRouters = (navArr) => {
        const loop = (list) => {
            return list.map((item, index) => {
                if (item.children && item.children.length !== 0) {
                    return (
                        <item.comp key={`${index}_comp`} viewComp={loop(item.children)} />
                    )
                }

                return (
                    <Route key={index} exact={item.exact} path={item.path} component={item.comp} />
                )
            });
        }
        return (
            <Switch>
                {loop(navArr)}
            </ Switch>
        )
    }

    render() {
        return (
            <BrowserRouter>
                {this.createRouters(nav)}
            </ BrowserRouter>
        )
    }
}

export default RouterConfig;