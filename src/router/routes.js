

const routes = [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/invoices',
      name: 'Invoices',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/my-wallets',
        name: 'Wallets',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          pageTitle: 'My Wallets'
        }
    },
    {
      path: "/:catchAll(.*)",
      component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
    },
]

export default routes