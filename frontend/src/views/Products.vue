<template>
  <div id="product-view">
    <h1>Gear up! Start here.</h1>
    <ProductsContainer />
    <ProductDescription v-if="modalStatus" />
  </div>
</template>

<script>
import ProductsContainer from "@/components/ProductsContainer.vue";
import ProductDescription from "@/components/ProductDescription.vue";

export default {
  computed: {
    modalStatus() {
      return this.$store.state.productModalStatus;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  components: {
    ProductsContainer,
    ProductDescription,
  },
};
</script>

<style scoped>
#product-view {
  width: 100vw;
  background-color: rgb(243, 239, 239);
  padding-top: 60px;
}
h1 {
  margin-left: 120px;
}
</style>
