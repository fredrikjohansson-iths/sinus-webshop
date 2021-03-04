<template>
  <div>
    <h2>Thank you for your purchase</h2>
    <p>Redirecting automatically</p>
    <h1>:)</h1>
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
/* The element to apply the animation to */
div {
  width: 600px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 6s;
}

@keyframes example {
  from {
    background-color: red;
  }
  to {
    background-color: yellow;
  }
}
</style>
