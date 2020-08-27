<template>
  <grid-view :entries="dataForTag"></grid-view>
</template>

<script>
import GridView from '@/components/GridView.vue';
import fetchService from '@/services/fetchService.js';

export default {
  name: 'TagView',
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
    dataForTag: function() {
      return this.data.filter(
        entry => entry.tags.indexOf(this.$route.params.tag) !== -1,
      );
    },
  },
};
</script>
