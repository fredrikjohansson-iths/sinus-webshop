import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  
   {
    path: "/customer-service",
    name: "Customer Service",
  
    component: () =>
       import("../views/customer-service.vue")
   },
   {
    path: "/About-us",
    name: "About Us",
   
    component: () =>
     import("../views/About-us.vue")
   }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
