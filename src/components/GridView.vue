<template>
  <div class="gridView">   
    <thumbnail-view :entry="datum" v-for="datum of entries" v-bind:key="datum.id"></thumbnail-view>
  </div>
</template>

<script>

import ThumbnailView from '@/views/ThumbnailView.vue';


export default {
  name: 'GridView',
  components: {
    ThumbnailView
  },
  props: {
    entries: Array
  },
  created() {    

  }
}
</script>

<style scoped>
  .gridView {
    display: flex;
    flex-wrap: wrap;
  }
</style>

