<template>
  <!-- <div>
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

      <div> -->
        <div>
          <form @submit.prevent="createEvent">
          <label>Select a category</label>
          <select v-model="event.category">
            <option v-for="cat in categories" :key="cat">{{ cat }}</option>
          </select>
          <h3>Name & describe your event</h3>
          <div class="field">
            <label>Title</label>
            <input v-model="event.title" type="text" placeholder="Add an event title"/>
          </div>
          <div class="field">
            <label>Description</label>
            <input v-model="event.description" type="text" placeholder="Add a description"/>
          </div>
          <h3>Where is your event?</h3>
          <div class="field">
            <label>Location</label>
            <input v-model="event.location" type="text" placeholder="Add a location"/>
          </div>
          <h3>When is your event?</h3>
          <div class="field">
            <label>Date</label>
            <datepicker v-model="event.date" placeholder="Select a date"/>
          </div>
          <div class="field">
            <label>Select a time</label>
            <select v-model="event.time">
              <option v-for="time in times" :key="time">{{ time }}</option>
            </select>
          </div>
          <input type="submit" class="button -fill-gradient" value="Submit"/>
        </form>
        </div>
  
    





</template>

<script>
// import { mapState,mapGetters } from 'vuex'
import Datepicker from 'vuejs-datepicker'
export default {
  components:{
    Datepicker
  },
  data() {
        const times = []
        for (let i = 1; i <= 24; i++) {
          times.push(i + ':00')
        }

    return {
      event: this.createFreshEvent(),
      times,
      categories: this.$store.state.categories,
      incrememtBy: 1
    }
  },
  methods: { 
    // incrementCount(){  mutations เฉยๆ
    //   return this.$store.commit('INCREMNT_COUNT',this.incrememtBy)
    // }

      incrementCount(){  //actions
      return this.$store.dispatch('updateCount',this.incrememtBy)
    },
    createEvent(){
      this.$store.dispatch('createEvent', this.event)
      .then(() =>{
        this.$router.push({
            name: 'event-show',
            params: { id: this.event.id }
          })
            this.event = this.createFreshEvent()
      }).catch(() =>{
        console.log('There was a problem creating your event')
      })
    },

     createFreshEvent() {
          const user = this.$store.state.user
          const id = Math.floor(Math.random() * 10000000)
          return {
            id: id,
            category: '',
            organizer: user,
            title: '',
            description: '',
            location: '',
            date: '',
            time: '',
            attendees: []
          }
        }

  },

    computed: {
     catLength(){
      return this.$store.getters.catLength;
     },
     getEvent(){ //mapGetters ได้เช่นกัน
      return this.$store.getters.getEventById;
     },
    // ...mapGetters(['getEventById']),
    // ...mapState([  'user','categories'])
  },
  mounted() {
    
  },
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

<style scoped>
.field{
  margin-bottom: 24px;
}
</style>

