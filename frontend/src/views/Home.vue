<template>
  <div>
    <h1>HELLO</h1><i class="fas fa-user"></i>
    <button type="button" @click="test">auth</button
    ><button type="button" @click="test2">getUser</button>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      const cred = { email: "customer@example.com", password: "password" };
      this.$store.dispatch("auth", cred);
    },
    test2() {
      //this.$store.dispatch("getUser");
      console.log(this.$store.state.a.session.active);
    }
  }
};
</script>

<style></style>
