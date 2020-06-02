import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

const login = () => import("../views/login/login.vue");

const business = () => import("../views/business/business.vue");

const warehouse = () => import("../views/warehouse/warehouse.vue");

const survey = () => import("../views/survey/survey.vue");
const createProduct = () => import("../views/survey/createProduct.vue");
const createdPage = () => import("../views/survey/createdPage.vue");

const admin = () => import("../views/admin/admin.vue")

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
    {
      path: '/login',
      name: 'Login',
      component: login
    },

    {
      path: '/business',
      name: 'business',
      component: business
    },

    {
      path: '/warehouse',
      name: 'warehouse',
      component: warehouse
    },

    {
      path: '/survey',
      name: 'survey',
      component: survey
    },
    {
      path: '/createProduct',
      name: 'createProduct',
      component: createProduct,
    },
    {
      path: '/createdPage',
      name: 'createdPage',
      component: createdPage,
    },

    {
      path: '/admin',
      name: 'admin',
      component: admin
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
