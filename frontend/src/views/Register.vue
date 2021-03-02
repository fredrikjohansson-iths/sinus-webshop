<template>
  <div><RegisterForm @submitted="newUser" /></div>
</template>

<script>
import axios from "axios";
import RegisterForm from "@/components/RegisterForm.vue";
export default {
  components: { RegisterForm },
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
