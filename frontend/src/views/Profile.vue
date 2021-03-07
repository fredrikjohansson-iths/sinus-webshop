<template>
  <div>
    <ProfileForm :user="userData" />
    <section v-if="orders !== null" class="order-list">
     <!-- <OrderList  v-for="item in orders" :key="item._id" :order="item" /> -->
    </section>
  </div>
</template>

<script>
import ProfileForm from "@/components/ProfileForm.vue";
//import OrderList from "@/components/OrderList.vue";

export default {
  beforeMount() {

    this.userData = this.$store.state.a.user
    console.log(this.userData)
  },
  data() {
    return {
      userData: {}
    }
  },
  computed: {
    orders() {
      return this.$store.state.a.order;
    },
  },
  components: { ProfileForm, /*OrderList*/ },
};
</script>

<style scoped>
.order-list > :nth-child(odd) {
  background-color: khaki;
}
</style>
