<template>
  <div><SignUpForm @submitted="newUser" /></div>
</template>

<script>
import axios from "axios";
import SignUpForm from "/home/stig/git/sinus-webshop/frontend/src/components/SignUpForm.vue";
export default {
  components: { SignUpForm },
  methods: {
    newUser(userData) {
      axios
        .post("http://localhost:5000/api/register/", userData)
        .then(response => {
          this.results = response.data;
          this.$router.push("/");
          console.log(response.status);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
