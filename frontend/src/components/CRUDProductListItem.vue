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
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  font-size: 1.2rem;
  width: auto;
}
#deleted-item {
  border: red 2px solid;
}
span {
  margin-left: 20px;
}
</style>
