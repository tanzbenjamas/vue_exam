import Vue from "vue";
import Vuex from "vuex";
import EventService from '@/services/EventService.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abc123", name: "Adam Jahr" },
    categories: [ 
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community",
    ],
    events:[],
    count:0,
    event:{}
  },
  mutations: { //can update/mutate Vuex State
   INCREMNT_COUNT(state,value){
     state.count +=value; 
     //ค่าที่ได้ เอาไปใส่ใน 
     //methods:{this.$store.commit('INCREMNT_COUNT') 
     //ตามด้วยชื่อตัว matations ที่ตั้งไว้ 
   },

   ADD_EVENT(state, event) {
    state.events.push(event)
  },

  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  }


  //ex
  //  PICK_UP_BREAD(state,bread){
  //   state.bread = bread;
  // }

  },
  actions: { 
  // Mutation are synchonous Actions are asynchronons
  // Synchronous: A B C D E
  // Asynhronous: A C E D B
  // Actions can wrap business logic around Mutations
  //ex

  // pleasePickUpBread({commit}){
  //     if(possible){
  //       fetch('/bread').then(bread => {
  //         commit('PICK_UP_BREAD',bread)
  //       })
  //     }
  // },
  updateCount({ state, commit }, incrementBy) {
    if (state.user) {
      commit('INCREMNT_COUNT', incrementBy)
    }
  },

  createEvent({ commit }, event) {
    return EventService.postEvent(event).then(() =>{
      commit('ADD_EVENT', event)
    })
  },
  fetchEvents({ commit },{ perPage, page}) {
    EventService.getEvents(perPage, page)
      .then(response => {
        console.log('Total events are ', response.headers['x-total-count'])
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },

  fetchEvent({ commit,getters }, id) {
    var event = getters.getEventById(id)
    if(event){
      commit('SET_EVENT', event)
    } else{
      EventService.getEvent(id)
      .then(response => {
        commit('SET_EVENT', response.data)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
    }
 
  }


},
  getters:{
    catLength: state =>{
      return state.categories.length
    },
    doneTodos:state =>{
      return state.todos.filter(todo => todo.done)
    },
    activeTodosCount: (state, getters) => {
      return state.todos.length - getters.doneTodos.length
    },

    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
    // activeTodosCount: (state) => {
    //   return state.todos.filter(todo => !todo.done).length
    // }
  },
  modules: {},
});
