import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EventList from "../components/EventList.vue";
import EventCreate from "../components/EventCreate.vue"
import EventShow from "../components/EventShow.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/event-list",
    name: "event-list",
    component: EventList
  },
  {
    path: "/event-create",
    name: "event-create",
    component: EventCreate
  },
  {
    path: "/event-show",
    name: "event-show",
    component: EventShow
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
