<template>
  <ul>
    <li v-for="order in orders" :key="order._id"></li>
  </ul>
</template>

<script>
export default {
  name: "ProfileOrders",
  props: { orders: Object }
};
</script>

<style></style>
