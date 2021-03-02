<template>
  <div> <UserProfileForm @mePatch="test" :user="user" /></div>
</template>

<script>
import axios from "axios";
import UserProfileForm from "@/components/UserProfileForm.vue";

export default {
data() {
  return {
    user: {}
  }
},methods: {
  test(event){console.log(event)}
},
  beforeCreate: 
    function() {
      const data = { email: "customer@example.com", password: "password" };
      axios
        .post("http://localhost:5000/api/auth", data)
        .then(response => {
          var token = response.data.token;
          this.$store.state.api.token = token 
          var header = { Authorization: token };

          axios
            .get("http://localhost:5000/api/me", { headers: header })
            .then(response => {
              this.user = response.data
              console.log(Object(this.user))
            });
        })
        .catch(error => {
          console.log(error);
        });
    
  },
  components: { UserProfileForm }
};
</script>

<style></style>
