import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: 'Welcome to Sinus Skateboards!'
    },
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/products",
    name: "Products",
    meta: {
      title: 'Browse our Products'
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Products.vue")
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      title: 'Create your Sinus Webshop Account'
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue")
  },
  {
    path: "/customer-service",
    name: "Customer Service",

    component: () => import("../views/customer-service.vue")
  },
  {
    path: "/about-us",
    name: "About Us",
    meta: {
      title: 'About Sinus Skateboards'
    },

    component: () => import("../views/About-us.vue")
  },

  {
    path: "/checkout",
    name: "Checkout",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Checkout.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    meta: {
      title: 'Sinus Admin',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AdminCRUD.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      title: 'My Sinus Account',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Profile.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    meta: {
      title: 'Page Not Found :('
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/404.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
