<template>
  <router-link class="event-link" :to="{name :'event-show',params:{id : '1'} }">
  <div class="event-card -shadow">
    <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
    <h4 class="title">{{ event.title }}</h4>
    <span>{{ event.attendess.length}} attendess</span>
  </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      // title:'Park Cleanup'
      event: {
        id: 1,
        title: "Park Cleanup",
        date: "Tues Aug 1 2021",
        time: "6:00 pm",
        attendess: [
          { id: "abc123", name: "Adam Jahr" },
          { id: "def456", name: "Gragg Polllack" },
        ],
      },
    };
  },
};
</script>
<style scoped>
h4 {
  color: green;
}
  .event-card {
      padding: 20px;
      margin-bottom: 24px;
      transition: all 0.2s linear;
      cursor: pointer;

    }
    .event-card:hover {
      transform: scale(1.01);
      box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
    }
    .event-card > .title {
      margin: 0;
    }
    
    .event-link {
      color: black;
      text-decoration: none;
      font-weight: 100;
    }
</style>
