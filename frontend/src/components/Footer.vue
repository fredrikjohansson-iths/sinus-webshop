<template>
  <div class="footer">
    <!-- Logga -->

    <img alt="Sinus logo" src="../assets/sinus-logo.svg" class="logo" />
   <div class="sm-logo">
    <img alt="Insta logo" src="../assets/insta.svg"  />
    <img alt="Facebook logo" src="../assets/facebook.svg" />
    <img alt="Twitter logo" src="../assets/twitter.svg"  /> </div>
    <!-- router -->
    <div class="router">
      <router-link to="Customer-service">Customer Service</router-link>
    </div>
    <div class="router2">
      <router-link to="About-us">About Us</router-link>
    </div>
    <div class="router3">
      <router-link to="Admin">Admin</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.footer {
  position: bottom;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(185, 180, 180);
  height: 7rem;
  display: flex;
  flex-direction: row;
  padding: 1rem;
    .sm-logo {
    align-items: center;
    justify-content:center;
    }
}

.logo {
  justify-self: flex-start;
}


.router2,
.router,
.router3 {
  justify-self: flex-end;
  align-self: flex-end;
}
</style>
