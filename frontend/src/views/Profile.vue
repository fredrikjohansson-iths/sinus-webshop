<template>
  <div> <ProfileForm @mePatch="test" :user="user" /><ProfileOrders @submitted="test" :orders="orders" /></div>
</template>

<script>
import axios from "axios";
import ProfileForm from "@/components/ProfileForm.vue";
import ProfileOrders from "@/components/ProfileOrders.vue";

export default {
data() {
  return {
    user: {}, orders: {}
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
            .get("http://localhost:5000/api/orders", { headers: header })
            .then(response => {
              this.orders = response.data
            });
        })
        .catch(error => {
          console.log(error);
        });
    
  },
  components: { ProfileForm, ProfileOrders }
};
</script>

<style></style>
