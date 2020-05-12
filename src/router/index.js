import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import gooddeed from "../views/gooddeed.vue";
import grateful from "../views/grateful.vue";
import reading from "../views/reading.vue";
import motivation from "../views/motivation.vue";
import graph from "../views/graph.vue";

import Login from '../views/Login.vue';
import store from '../store'




Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: "/gooddeed",
    name: "gooddeed",
    component: gooddeed,
    meta: { requiresAuth: true }
  },
  {
    path: "/grateful",
    name: "grateful",
    component: grateful,
    meta: { requiresAuth: true }
  },
  {
    path: "/reading",
    name: "reading",
    component: reading,
    meta: { requiresAuth: true }
  },
  {
    path: "/motivation",
    name: "motivation",
    component: motivation,
    meta: { requiresAuth: true }
  },
  {
    path: "/graph",
    name: "graph",
    component: graph,
    meta: { requiresAuth: true }
  },
 

  {
    path: '/login',
    name: 'Login',
    component: Login
  },
 
 
  
];





const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.getUser) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }
})



export default router;
