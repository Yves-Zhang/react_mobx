import React from 'react';
import ReactDom from 'react-dom';
import RouterConfig from '@views/routerConfig';

import './common';

const appEle = document.getElementById('app');

ReactDom.render(
    <RouterConfig />,
    appEle
);

if (module.hot) {
    console.log('启用热加载更新！')
    module.hot.accept();
}