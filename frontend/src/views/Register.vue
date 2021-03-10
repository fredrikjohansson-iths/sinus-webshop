<template>
  <div id="register-page">
    <h1>Create your own account.</h1>
    <h3>
      This will allow you to save your billing information and view all of your
      previous orders! Pretty cool, right?
    </h3>
    <RegisterForm @submitted="postUser" />
  </div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  name: "Register",
  components: { RegisterForm },
  methods: {
    postUser(payload) {
      this.$store.b.dispatch("postUser", payload);
    },
  },
};
</script>

<style scoped>
#register-page {
  min-height: 100vh;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h3 {
  text-align: left;
  max-width: 100ch;
  margin-bottom: 60px;
}
</style>
