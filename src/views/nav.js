import AsyncComponent from '@commonComponents/asyncComponent'

const navConfig = [
    {
        title: '首页',
        path: '/',
        exact: true,
        comp: AsyncComponent(() => import('@views/home')),
        children: [
            {
                title: 'demoOne',
                path: '/demoOne',
                exact: true,
                comp: AsyncComponent(() => import('@views/demo1')),
                children: []
            },
            {
                title: 'demoTwo',
                path: '/demoTwo',
                exact: true,
                comp: AsyncComponent(() => import('@views/demo2')),
                children: []
            }
        ]
    }
];

export default navConfig;