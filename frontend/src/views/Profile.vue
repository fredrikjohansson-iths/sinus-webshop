<template>
  <div>
    <ProfileForm @mePatch="test" :user="userData" />
  </div>
</template>

<script>
//import axios from "axios";
import ProfileForm from "@/components/ProfileForm.vue";

export default {
  beforeMount() {
    this.userData = this.$store.state.a.user;
  },
  data() {
    return {
      userData: {},
      ordersData: {}
    };
  },

  components: { ProfileForm }
};
</script>

<style></style>
