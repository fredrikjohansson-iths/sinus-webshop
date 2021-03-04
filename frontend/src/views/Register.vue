<template>
  <div><RegisterForm @submitted="postUser" /></div>
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

<style></style>
