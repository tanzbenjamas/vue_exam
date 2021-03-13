import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EventCard from '../components/EvenCard.vue';
import EventCreate from '../views/EventCreate.vue';
import EventShow from '../views/EventShow.vue';
import EventList from '../views/EventList.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "event-create",
    component: EventCreate
  },
  {
    path: "/",
    name: "event-list",
    component: EventList
  },
  {
    path: "/",
    name: "event-show",
    component: EventShow
  },
  {
    path: "/",
    name: "event-card",
    component: EventCard
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
