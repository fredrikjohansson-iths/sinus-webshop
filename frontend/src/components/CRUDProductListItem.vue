<template>
  <div @click="openEditor" class="list-item">
    <span class="title">{{ product.title }}</span>
    <span class="category">{{ product.category }}</span>
  </div>
</template>

<script>
export default {
  methods: {
    openEditor() {
      this.$store.dispatch("getSingleProduct", this.product._id);
    },
  },
  components: {},
  props: {
    product: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  font-size: 1.2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .title {
    grid-column: 1;
  }
  .category {
    grid-column: 2;
  }
}
</style>
