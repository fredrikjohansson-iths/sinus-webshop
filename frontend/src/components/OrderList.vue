<template>
  <div>
    <section v-for="(item, index) in orders" :key="index">
      <p>{{ item.items }}</p>
    </section>
    <p>{{ orders }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    orders() {
      return this.$store.state.order;
    },
  },
};
</script>

<style lang="scss" scoped></style>
