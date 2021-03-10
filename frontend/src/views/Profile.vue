<template>
  <div>
    <h1>Hello {{ firstName }}!</h1>
    <h2>These are your details</h2>
    <ProfileForm :user="userData" />
    <section class="order-list">
      <OrderList />
    </section>
  </div>
</template>

<script>
import ProfileForm from "@/components/ProfileForm.vue";
import OrderList from "@/components/OrderList.vue";

export default {
  created() {
    this.userData = this.$store.state.a.user;
    console.log(this.userData);
  },
  data() {
    return {
      userData: {},
    };
  },
  computed: {
    // orders() {
    //   return this.$store.state.a.order;
    // },
    firstName() {
      const name = this.userData.name;
      let names = name.split(" ");
      let firstName = names[0];
      return firstName;
    },
  },
  components: { ProfileForm, OrderList },
};
</script>

<style scoped>

</style>
