<template>
  <div id="product-holder">
    <ProductsItemHolder
      v-for="product in products"
      :key="product._id"
      :product="product"
      class="product"
      :editMode="editMode"
    />
  </div>
</template>

<script>
import ProductsItemHolder from "@/components/ProductsItemHolder.vue";

export default {
  props: {
    editMode: {
      type: Boolean,
      default: false
    }
  },

  components: {
    ProductsItemHolder
  },
  computed: {
    products() {
      return this.$store.state.allProducts;
    }
  }
};
</script>

<style lang="scss" scoped>
#product-holder {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 80px;
  gap: 60px;
}
</style>
