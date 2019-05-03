import React from 'react';
import ReactDom from 'react-dom';
import App from '@views/app';

import './common';

const appEle = document.getElementById('app');

ReactDom.render(
    <App />,
    appEle
);

if (module.hot) {
    console.log('启用热加载更新！')
    module.hot.accept();
}