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
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/event-create",
    name: "event-create",
    component: EventCreate
  },
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: "/event-show/:id",
    name: "event-show",
    component: EventShow,
    props: true

  },
  {
    path: "/event-card",
    name: "event-card",
    component: EventCard,
    props: true

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
