<template>
  <div>
    <ul v-if="orders">
      <li v-for="order in orders" :key="order._id"></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: { orders: Object },
  name: "ProfileOrders"
};
</script>

<style></style>
