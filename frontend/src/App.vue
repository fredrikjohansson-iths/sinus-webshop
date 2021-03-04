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
export default {
  components: {
    Header,
    Footer,
  },
};
</script>



 <style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
 </style> 

 <style lang="scss">


$primary-color: #000;
$secondary-color: #fff;
$rounded-radius: 50px;


 body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: $primary-color;
  
}

.product-add {
    color: $primary-color;
    width: 202px;
    height: 48px;
    border-radius: $rounded-radius;
    background-color: black;
    color: white;
}

</style>
