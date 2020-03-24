import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import gooddeed from "../views/gooddeed.vue";
import grateful from "../views/grateful.vue";
import reading from "../views/reading.vue";
import motivation from "../views/motivation.vue";
import graph from "../views/graph.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/gooddeed",
    name: "gooddeed",
    component: gooddeed
  },
  {
    path: "/grateful",
    name: "grateful",
    component: grateful
  },
  {
    path: "/reading",
    name: "reading",
    component: reading
  },
  {
    path: "/motivation",
    name: "motivation",
    component: motivation
  },
  {
    path: "/graph",
    name: "graph",
    component: graph
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
