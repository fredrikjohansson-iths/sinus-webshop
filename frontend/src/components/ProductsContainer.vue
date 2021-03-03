<template>
  <div id="product-holder">
    <ProductsItemHolder
      v-for="item in products"
      :key="item.id"
      :product="item"
      class="product"
    />
  </div>
</template>

<script>
import { get, PRODUCTS_URL } from "@/api/get.js";
import ProductsItemHolder from "@/components/ProductsItemHolder.vue";

export default {
  components: {
    ProductsItemHolder,
  },

  created: async function() {
    const response = await get(PRODUCTS_URL);
    this.products = response.data;
  },

  data() {
    return {
      products: [],
    };
  },
};
</script>

<style lang="scss" scoped>
#product-holder {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.product {
  margin-left: 60px;
}
</style>
