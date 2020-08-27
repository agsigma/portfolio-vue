<template>
  <article class="post">
    <router-link :to="{path: `/page/${entry.id}/`}" class="wrapper">
      <div class="post-preview" data-url="#entry/codility-challanges">
        <header class="entry-header full-width-image" data-url="#entry/codility-challanges">
          <h2 class="entry-title">
            <span>{{entry.title}}</span>
          </h2>
        </header>
      </div>
      <div class="backgroundImage" :style="{backgroundImage: frontImage}"></div>

      <div class="tags-links">
        <span v-for="(tag, i) of entry.tags" v-bind:key="tag">
          <span v-if="i > 0">,&nbsp;</span>
          <router-link :to="{path: `/tag/${tag}/`}" class="wrapper">{{tag}}</router-link>
        </span>
      </div>
    </router-link>
  </article>
</template>

<script>
import fetchService from '@/services/fetchService.js';


export default {
  name: 'ThumbnailView',
  components: {},
  props: {
    entry: Object,
  },
  data() {
    return {};
  },
  created() {
    fetchService.getData().then(data => (this.data = data));
  },
  computed: {
    frontImage: function() {
      try {
        return 'url("' + this.entry.images.find(img => img.isFront).src + '")';
      } catch (err) {
        console.error('No front image for: ', this.entry);
        return ''; // wyslac zaslepke
      }
    },
  },
};
</script>

<style>
.post {
  width: 100%;
  height: 280px;
  box-sizing: content-box;
  position: relative;
  background: white;
  box-shadow: 0 0 13px rgba(0, 0, 0, 0.07);
  margin: 0px 0px 25px 0px;
}
.backgroundImage {
  background-size: cover;
  position: absolute;
  top: 45px;
  left: 0px;
  right: 0px;
  bottom: 65px;
  transition: filter 0.3s;
  filter: none;
}
.backgroundImage:hover {
  filter: grayscale(90%);
}
.tags-links {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 40px;
  text-align: left;
  padding-left: 50px;
  font-size: 13px;
}
.tags-links:before {
  bottom: 0;
  color: #ddd;
  content: '\f02b';
  display: block;  
  font-family: FontAwesome;
  height: 70px;
  left: -10px;
  line-height: 80px;
  position: absolute;
  text-align: right;
  width: 40px;
}
a {
  color: #777;
}
a:hover {
  color: #5cc1a9;
}

h2 {
  color: #363636;
  display: block;
  position: relative;
  text-align: left;
  font-size: 15px;
  line-height: 1.6;
  line-height: 48px;
  padding-left: 12px;
}

@media (min-width: 720px) {
  .post {
    width: 47% !important;
    margin: 1.5%;
  }
}

@media (min-width: 960px) {
  .post {
    width: 31% !important;
    margin: 1%;
  }
}
</style>