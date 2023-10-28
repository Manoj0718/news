<template>
  <div id="news" class="h-fit shadow-md border p-1 m-4 lg:mx-auto lg:my-8 lg:w-1/2 flex flex-col divide-y-4"
    v-for="articles in posts" v-bind:key="articles">
    <h1 class="text-center text-xl lg:text-2xl my-1.5 lg:m-3.5">{{ articles.title }}</h1>
    <div class="p-0.25 flex flex-col justify-between lg:p-3">
      <div>
        <a :href="articles.url" target="_blank">
          <img v-bind:src="articles.urlToImage" class="" /></a>
      </div>
      <div class="flex flex-row justify-between p-2 lg:p-4">
        <div>
          <ph-calendar-blank :size="20" />
          <p>{{ dateShow(articles.publishedAt) }}</p>
        </div>
        <div class="lg:mb-2">
          <a :href="articles.url" target="_blank">
            <ph-newspaper-clipping :size="20" />
            <p>{{ articles.source.name }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";


export default {
  name: "News_Layer",
  data() {
    return {
      posts: null,
    };
  },
  mounted() {
    axios
      .get(
        process.env.VUE_APP_URL

      )
      .then((res) => (this.posts = res.data.articles))
      .catch((err) => console.log(Error(err)));
  },
  methods: {
    dateShow(arraydata) {
      const showDate = new Date(arraydata);
      return showDate.toDateString();
    },
  },
};
</script>

