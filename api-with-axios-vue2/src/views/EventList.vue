<template>
  <div>
    <!-- {{ user.user.name }} user ตัวแรกชื่อ module ตัวสอง state -->
    <h1>EventList for {{ user.user.name }}</h1> 
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page != 1">
    <router-link :to="{ name: 'event-list', query:{ page: page - 1}}" rel="prev">
      Prev Page
    </router-link> |
        </template>
      <router-link :to="{ name: 'event-list', query:{ page: page + 1}}" rel="next">
      Nexe Page
    </router-link> 

  </div>
</template>

<script>
import EventCard from "../components/EvenCard";
import { mapState } from 'vuex'

export default {
  components: {
    EventCard,
  },
  data() {
    return {
    };
  },
  created() {
    // EventService.  ()
    //   .then((response) => {
    //     this.events = response.data;
    //   })
    //   .catch((error) => {
    //     console.log("There was an error:", error.response);
    //   });
    this.$store.dispatch('event/fetchEvents',
    {perPage:3, page:this.page})
  },
  computed: {
      page(){
        return parseInt(this.$route.query.page) || 1
      },
      hasNextPage() {
        return this.event.eventsTotal > this.page * this.perPage
      },

    // ...mapState(['events','eventsTotal','user'])
    ...mapState(['event', 'user'])

}
}
</script>

<style></style>
