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

<style lang="scss">
#app {
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
