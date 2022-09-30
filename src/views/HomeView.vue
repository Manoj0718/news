<template>
    <Hero_Image/>
    <News_Layer></News_Layer>
</template>

<script>
// @ is an alias to /src
import Hero_Image from "@/components/Hero_Image.vue";
import News_Layer from "@/components/News_Layer.vue";
export default {
  name: "HomeView",
  components: {
    Hero_Image,
    News_Layer,
  },
};
</script>
