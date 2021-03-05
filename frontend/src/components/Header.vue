<template>
  <div id="nav-bar">
    <router-link title="Back to home" to="/"
      ><img class="logo" src="@/assets/sinus-logo.svg" height="100" width="200"
    /></router-link>
    <HeaderNavBar />
  </div>
</template>

<script>
import HeaderNavBar from "@/components/HeaderNavBar.vue";
export default {
  name: "Home",
  components: {
    HeaderNavBar,
  },
};
</script>

<style lang="scss" scoped>
#nav-bar {
  display: flex;
  height: 100px;
  background-color: rgb(185, 180, 180);
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.logo {
  color: red;
  margin-left: 40px;
}
.logo-holder {
  display: flex;
  align-items: center;
}
</style>
