<template>
  <grid-view :entries="dataForCategory"></grid-view>
</template>

<script>
import GridView from '@/components/GridView.vue';
import fetchService from '@/services/fetchService.js';

export default {
  name: 'CategoryView',
  components: {    
    GridView,
  },
  data() {
    return {
      data: []
    };
  },
  created() {
    fetchService.getData().then(data => this.data = data);
  },
  computed: {
    dataForCategory: function() {
      return this.data.filter(
        entry => entry.categories.indexOf(this.$route.params.category) !== -1,
      );
    },
  },
};
</script>
