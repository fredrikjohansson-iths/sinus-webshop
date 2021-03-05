<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import "./assets/scss/sinus-style.scss";

export default {
  components: {
    Header,
    Footer,
  },
  watch: {
    $route(to, from) {
      document.title = to.meta.title || from.meta.title;
    },
  },
};
</script>

<style>
#app {
  height: minmax(100vh, max-content);
  font-family: Arial, Helvetica, sans-serif;
}
</style>
