import Vue from "vue";
import Vuex from "vuex";

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
    events:[
      { id: 1, title: '...', organizer: '...'},
      { id: 2, title: '...', organizer: '...'},
      { id: 3, title: '...', organizer: '...'},
      { id: 4, title: '...', organizer: '...'},
    ],
    count:1
  },
  mutations: { //can update/mutate Vuex State
   INCREMNT_COUNT(state){
     state.count +=1; 
     //ค่าที่ได้ เอาไปใส่ใน methods:{this.$store.commit('INCREMNT_COUNT') ตามด้วยชื่อตัว matations ที่ตั้งไว้ }
   }
  },
  actions: {},
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
