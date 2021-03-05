<template>
  <div><h1>Create your Sinus Webshop Account!</h1><h2>This will allow you to save your billing information and view all of your previous orders! Pretty cool, right?</h2><RegisterForm @submitted="postUser" /></div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";
export default {
  name: "Register",
  components: { RegisterForm },
  methods: {
    postUser(payload) {
      this.$store.b.dispatch("postUser", payload);
    }
  }
};
</script>

<style>
h1,  h2 {
  text-align: center;
}

</style>
