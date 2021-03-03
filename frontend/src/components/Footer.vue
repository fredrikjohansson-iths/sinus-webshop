<template>
<div class="footer">
<!-- Logga -->


 <img alt="Sinus logo" src="../assets/sinus-logo.svg" class="logo"/>

 <!-- router -->
  <div class="router"><router-link to="Customer-service">Customer Service</router-link>
</div>
<div class="router2">
<router-link to="About-us">About Us</router-link></div>

<div class="router3"> 
<router-link to="adminCRUD">Admin</router-link></div>
</div>

</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    
  },

}
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(185, 180, 180);
  color: red;
  text-align:center; 
  height: 7rem;
  display: flex;
  flex-direction: row; 
  padding: 1rem;
}

.logo {
   width: 25%; 
   justify-self: flex-start;
  
}
.router {
   justify-self: flex-end;
  align-self: flex-end;
}

.router2 {
  justify-self: flex-end;
  align-self: flex-end;
}

</style>
