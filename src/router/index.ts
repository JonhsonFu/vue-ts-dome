import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../Login/Login.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children: [{
      path: '/onlineVideo',
      name: 'onlineVideo',
      component: () => import('../views/onlineVideo/Video.vue'),
    }]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/play',
    name: 'Play',
    component: () => import('../views/Play.vue'),
  },
  // {
  //   path: '/onlineVideo',
  //   name: 'onlineVideo',
  //   component: () => import('../views/onlineVideo/Video.vue'),
  // },
  // {
  //   path: '/onlineVideo',
  //   component: Home,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/onlineVideo/Video.vue'),
  //       name: 'onlineVideo',
  //       meta: {
  //         title: '在线视频',
  //         icon: 'onlineVideo',
  //         affix: true
  //       }
  //     }
  //   ]
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
