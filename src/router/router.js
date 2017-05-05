import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/list')), 'list')
    }, {
        path: '/item/:id',
        component: r => require.ensure([], () => r(require('../page/item')), 'item')
    }]
}]