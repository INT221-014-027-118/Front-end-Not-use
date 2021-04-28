import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import Form from '../views/Form.vue'
import Product from '../views/Product.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    props: true
  },
  {
    path: '/product/:type',
    name: 'ProductType',
    component: Product,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router