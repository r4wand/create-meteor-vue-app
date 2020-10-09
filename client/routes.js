import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Index from "./pages/Index.vue";
import About from "./pages/About.vue";
import fourofour from "./pages/_fourofour.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "*",
    name: "fourofour",
    component: fourofour,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
