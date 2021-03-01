import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/about/',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    meta: {
      title: 'Create your Sinus Webshop Account'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
