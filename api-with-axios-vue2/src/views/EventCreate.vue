<template>
  <div>
      <h1>Create an Event,  {{ user.Name }}</h1>
      <p>This event was create by {{ user.id }}</p>
      <ul>
        <li v-for="cat in categories" :key="cat">
          {{ cat }}
        </li>
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  // computed:{ //คล้ายๆ oncheck angular
  //   userName(){
  //     return this.$store.state.user.name
  //   },
  //   userID(){
  //     return this.$store.state.user.id
  //   }
  // }
  //ใช้ map
    computed: mapState({ 
      // userName: state => state.user.name,
      // userID: state => state.user.id,
      // categories: state => state.categories
      user:'user',
      categories:'categories'
  })

}
</script>

<style>

</style>