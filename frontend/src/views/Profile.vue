<template>
  <div>
    <ProfileForm @mePatch="test" :user="userData" /><ProfileOrders
      @submitted="test"
      :orders="ordersData"
    />
    <section class="order-list">
      <OrderList v-for="item in orders" :key="item._id" :order="item" />
    </section>
  </div>
</template>

<script>
import ProfileForm from "@/components/ProfileForm.vue";
import OrderList from "@/components/OrderList.vue";

export default {
  beforeMount() {
    this.userData = this.$store.state.a.user;
  },
  data() {
    return {
      userData: {},
      ordersData: {},
    };
  },
  computed: {
    orders() {
      return this.$store.state.a.order;
    },
  },
  components: { ProfileForm, OrderList },
};
</script>

<style scoped>
.order-list > :nth-child(odd) {
  background-color: khaki;
}
</style>
