import React from 'react';
import ReactDom from 'react-dom';
import RouterConfig from '@views/routerConfig';

import { configure } from 'mobx'
import stores from '@mobx/stores'
import { Provider } from 'mobx-react'

import 'lodash'

import './common';

configure({ enforceAction: true })

const appEle = document.getElementById('app');

ReactDom.render(
    <Provider {...stores}>
        <RouterConfig />
    </Provider>,
    appEle
);

if (module.hot) {
    console.log('启用热加载更新！')
    module.hot.accept();
}