<template>
  <div id="profile-page">
    <h1>Hello {{ firstName }}!</h1>

    <section class="information">
      <section class="personal-information">
        <h2>These are your details</h2>
        <ProfileForm :user="userData" />
      </section>

      <section class="order-list">
        <h2>This is your order history</h2>
        <OrderList />
      </section>
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
#profile-page {
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 80px;
}
.personal-information,
.order-list {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  padding: 50px;
}
.information {
  display: flex;
  justify-content: space-between;
  gap: 60px;
}
</style>
