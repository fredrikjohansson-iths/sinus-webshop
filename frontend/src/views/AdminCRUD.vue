<template>
  <div>
    <section class="crud-header">
      <button>Add New Product</button>
    </section>
    <EditProduct />
    <ProductsContainer />
  </div>
</template>

<script>
import EditProduct from "@/components/EditProduct.vue";
import ProductsContainer from "@/components/ProductsContainer.vue";
export default {
  components: {
    EditProduct,
    ProductsContainer,
  },
};
</script>

<style lang="scss" scoped>
.list-headings {
  display: grid;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: 20% repeat(3, 20%) 20%;
  text-align: left;

  .title {
    grid-column: 2;
  }
  .id {
    grid-column: 3;
  }
  .category {
    grid-column: 4;
  }
}
.product-list > :nth-child(even) {
  background: rgb(224, 224, 224);
}
</style>
