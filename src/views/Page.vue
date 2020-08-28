<template>
  <article class="page">
    <h1 class="entry-title">{{record.title}}</h1>
    <div v-html="record.content"></div>
    <div class="tags-links">
      <span v-for="(tag, i) of record.tags" v-bind:key="tag">
        <span v-if="i > 0">,</span>
        <router-link :to="{path: `/tag/${tag}/`}" class="wrapper">{{tag}}</router-link>
      </span>
    </div>
  </article>
</template>

<script>
import fetchService from '@/services/fetchService.js';

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      record: {},
    };
  },
  created() {
    fetchService
      .getRecord(this.$route.params.id)
      .then(record => (this.record = record));    
  },
  mounted() {
    // LIGHTBOX    
    setTimeout(() => {
      const galleryUrls = [...document.querySelectorAll('figure > img')];      
      /*global GLightbox*/
      const elements = galleryUrls.map(img => {
          return {
            type: 'image',
            href: img.src
          };
      });
      const gallery = GLightbox({
        elements: elements
      });      
      galleryUrls.forEach(img => {
        img.addEventListener('click', (event) => {
          const href = event.target.src;
          gallery.setElements([{type: 'image', href: href}].concat(elements.filter(element => element.href !== href)));
          gallery.open();
        })
      });
    }, 0);
  },
  watch: {
    $route() {
      fetchService
        .getRecord(this.$route.params.id)
        .then(record => (this.record = record));
    },
  },
};
</script>

<style scoped>
/deep/ img {
  max-width: 100%;
  width: auto;
  height: auto;
  margin: 10px 0px;
  border: 2px solid lightgrey;
  cursor: pointer;
}

.page {
  box-sizing: border-box;
  position: relative;
  width: 700px;
  max-width: 95%;
  background: #fff;
  -webkit-box-shadow: 0 0 13px rgba(0, 0, 0, 0.07);
  -moz-box-shadow: 0 0 13px rgba(0, 0, 0, 0.07);
  -ms-box-shadow: 0 0 13px rgba(0, 0, 0, 0.07);
  box-shadow: 0 0 13px rgba(0, 0, 0, 0.07);
  margin: 0 auto;
  padding: 0 20px 30px 20px;
  text-align: left;
}
.entry-title {
  font-size: 32px;
  font-weight: normal;
  line-height: 1.2;
  margin: 0 0 25px 0;
  padding: 50px 0px 0 0px;
  position: relative;
  word-break: normal;
}
/deep/ ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
/deep/ figure ul {
  list-style-type: none;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
/deep/ pre {
  font-family: monospace;
  background: #f6f6f6;
  margin: 15px 0px;
  padding: 5px;
  border: 1px solid lightgrey;
}
/deep/ .tags-links {
    background: #fff;
    border-top: 1px solid #b5b5b5;;
    bottom: 0;
    color: #b5b5b5;
    display: block;
    font-size: 11px;
    height: 68px;
    line-height: 68px;
    overflow: hidden;
    margin: 10px 0 0 0;
    padding: 0 0 0 50px;
    position: relative;    
}
/deep/ .tags-links a {
  color: #777;
  text-decoration: none;
}
/deep/ .tags-links a:hover {
  color: #5cc1a9;
}
/deep/ .tags-links:before {
    bottom: 0;
    color: #ddd;
    content: "\f02b";
    display: block;
    font-size: 20px;
    font-family: FontAwesome;
    height: 70px;
    left: -10px;
    line-height: 80px;
    position: absolute;
    text-align: right;
    width: 40px;
}

/* TABLES */
/deep/ th {
  background: #f5f5f5;
  border: 1px solid #e5e5e5;
  padding: 5px 10px;
  word-break: normal;
}
/deep/ td {  
  border: 1px solid #e5e5e5;
  padding: 5px 10px;
  word-break: normal;
}
/deep/ td a {
  color: #5cc1a9;
}
/deep/ td a:hover {
  color: #777;
}
/* PARAGRAPHS */
/deep/ p {
  margin: 10px auto 15px auto;
}
/* STRONG */
/deep/ strong {
  font-weight: bolder;
}
</style>
