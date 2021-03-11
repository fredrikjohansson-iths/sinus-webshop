<template>
  <div>
    <h1>:)</h1>
    <h2>Thank you for your purchase</h2>
    <p>Redirecting automatically</p>
  </div>
</template>

<script>
export default {
  created() {
    setTimeout(this.redirect, 2500);
  },
  methods: {
    redirect() {
      this.$router.push("Products");
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100vh;
}
</style>
