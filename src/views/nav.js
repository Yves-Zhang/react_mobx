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
                comp: AsyncComponent(() => import('@views/login')),
                children: []
            },
            {
                title: 'demoTwo',
                path: '/demoTwo',
                exact: true,
                comp: AsyncComponent(() => import('@views/register')),
                children: []
            }
        ]
    }
];

export default navConfig;