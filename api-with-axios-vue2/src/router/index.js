import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EventCard from '../components/EvenCard.vue';
import EventCreate from '../views/EventCreate.vue';
import EventShow from '../views/EventShow.vue';
import EventList from '../views/EventList.vue'
import NProgress from 'nprogress'
import store from '@/store/index'

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
    props: true,
    beforeEnter: (routeTo, routeFrom, next) => {
      store.dispatch('event/fetchEvent',routeTo.params.id).then((event)=>{
        routeTo.params.event = event;
        next()
      })
    }

  },
  {
    path: "/event-card",
    name: "event-card",
    component: EventCard,
    props: true

  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

//Start the progress bar when routing begins
router.beforeEach((routeTo,routeFrom,next) =>{
  NProgress.start()
  next()
})

//Finish the progress bar when routing is about
router.afterEach(() => {
  NProgress.done()
})

export default router;
