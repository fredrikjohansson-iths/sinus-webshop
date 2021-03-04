<template>
  <div>
    <EditProduct />
    <h2>All products</h2>
    <section class="crud-product-list">
      <section class="list-header">
        <h3 class="title">Title</h3>
        <h3 class="id">Serial No</h3>
        <h3 class="category">Category</h3>
      </section>
      <CRUDProductListItem
        v-for="product in products"
        :key="product._id"
        :product="product"
      />
    </section>
  </div>
</template>

<script>
import { get, PRODUCTS_URL } from "@/api/get.js";
import EditProduct from "@/components/EditProduct.vue";
import CRUDProductListItem from "@/components/CRUDProductListItem.vue";

export default {
  data() {
    return {
      products: []
    };
  },
  created: async function() {
    const response = await get(PRODUCTS_URL);
    this.products = response.data;
  },
  computed: {
    userRole() {
      return this.$store.state.a.user.role;
    }
  },
  components: {
    EditProduct,
    CRUDProductListItem
  },
};
</script>

<style lang="scss" scoped>
.crud-product-list > :nth-child(even) {
  background-color: rgb(248, 231, 237);
}

.list-header {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
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
</style>
