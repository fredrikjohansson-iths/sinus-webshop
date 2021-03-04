<template>
  <div id="nav-bar">
    <section class="logo-holder">

      <!-- Logo -->
      <img class="sinus-logo" alt="Sinus logo" src="../assets/sinus-logo.svg" />
      <!-- <img src="@/assets/sinus-logo.svg" alt="Sinus Logo" /> -->
      <!-- <h1>SINUS WEBSHOP HELLO</h1> -->

    </section>
    <HeaderNavBar />
  </div>
</template>

<script>
import HeaderNavBar from "@/components/HeaderNavBar.vue";
export default {
  components: {
    HeaderNavBar,
  },
};
</script>

<style lang="scss" scoped>
#nav-bar {
  display: flex;
  height: 80px;
  background-color: rgb(185, 180, 180);
  justify-content: space-between;
  margin-bottom: 80px;
}
.logo-holder {
  display: flex;
  align-items: center;
}
</style>
