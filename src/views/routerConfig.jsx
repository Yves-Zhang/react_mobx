import React from 'react';
import { BrowserRouter, HashRouter, Router, Switch, Route } from 'react-router-dom';
import AsyncComponent from '@commonComponents/asyncComponent'

const RouterConfig = () => {
    return (
        <HashRouter>
            <Switch>
                <Route key="login" exact path="/login" component={AsyncComponent(() => import('@views/login'))} />
                <Route key="register" exact path="/register" component={AsyncComponent(() => import('@views/register'))} />
                <Route key="home" path="/" component={AsyncComponent(() => import('@views/home'))} />
            </ Switch>
        </ HashRouter>
    )
}

export default RouterConfig;