<template>
  <div>
      <h1>Create an Event,  {{ user.Name }}</h1>
      <p>This event was create by {{ user.id }}</p>
      <p>There are {{ catLength }} categories </p>
      <p>getEvent {{ getEvent(1) }} </p>
      <p>getEvent {{ getEventById(2) }} </p>
      
      <p> mutations </p>
      <div>
        <input type="number" v-model.number="incrememtBy">
        <button @click="incrementCount"> Incrememt </button>
      </div>

      <ul>
        <li v-for="cat in categories" :key="cat">
          {{ cat }}
        </li>
      </ul>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
  data() {
    return {
      incrememtBy: 1
    }
  },
  methods: { 
    // incrementCount(){  mutations เฉยๆ
    //   return this.$store.commit('INCREMNT_COUNT',this.incrememtBy)
    // }

      incrementCount(){  //actions
      return this.$store.dispatch('updateCount',this.incrememtBy)
    }

  },

    computed: {
     catLength(){
      return this.$store.getters.catLength;
     },
     getEvent(){ //mapGetters ได้เช่นกัน
      return this.$store.getters.getEventById;
     },
    ...mapGetters(['getEventById']),
    ...mapState([  'user','categories'])
  }
    // computed:{ //คล้ายๆ oncheck angular
  //   userName(){
  //     return this.$store.state.user.name
  //   },
  //   userID(){
  //     return this.$store.state.user.id
  //   }
  // }
  //ใช้ map

  // userName: state => state.user.name,
  // userID: state => state.user.id,
  // categories: state => state.categories
      
  // user:'user',
  // categories:'categories'
}

</script>

<style>

</style>

