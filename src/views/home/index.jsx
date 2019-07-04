import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { BrowserRouter, HashRouter, Router, Switch, Route, Redirect } from 'react-router-dom';
import { Button } from 'antd'
import { DevTools } from '@commonComponents'

import { getTestData } from '@http/testHttp'

import Header from './header'
import { inject, observer } from 'mobx-react'

// @inject 与@observer的顺序不能错 否则会导致试图无法重新渲染

@inject('testStore')
@observer
class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // getTestData()
    }

    change = () => {
        const { testStore } = this.props
        testStore.add();
    }

    render() {
        const { testStore } = this.props
        return (
            <div className="homeContent">
                {/* <Header /> */}
                num:{testStore.num}
                <Button onClick={this.change}>改变store里的值</Button>
                {/* <Switch>
                    {renderRoutes(routes)}
                </Switch> */}
                <DevTools />
            </div>
        )
    }
}

export default Home;