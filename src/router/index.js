import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import( /* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import( /* webpackChunkName: "team" */ '../views/Team.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import( /* webpackChunkName: "form" */ '../views/Form.vue'),
    props: true
  },
  {
    path: '/edit/:itemId',
    name: 'FormEdit',
    component: () => import( /* webpackChunkName: "form" */ '../views/Form.vue'),
    props: true
  },
  {
    path: '/edit/:itemId:edit',
    name: 'Edit',
    component: Form,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import( /* webpackChunkName: "products" */ '../views/Product.vue'),
    props: true
  },
  {
    path: '/products/:type',
    name: 'ProductTypes',
    component: () => import( /* webpackChunkName: "productTypes" */ '../views/Product.vue'),
    props: true,
    children: [{
      path: ':productId',
      name: 'Item',
      props: true,
      component: () => import( /* webpackChunkName: "item" */ '../views/Item.vue')
    }],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router