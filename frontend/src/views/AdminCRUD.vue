<template>
  <div class="admin-view">
    <EditProduct @change="changeVisibility" />

    <section class="crud-product-list" v-if="productListVisibility">
      <h2>All products</h2>
      <section class="list-header">
        <h3 class="title">Title</h3>
        <h3 class="id">Serial No</h3>
        <h3 class="category">Category</h3>
      </section>
      <div class="list-items">
        <CRUDProductListItem
          v-for="product in products"
          :key="product._id"
          :product="product"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { get, PRODUCTS_URL } from "@/api/get.js";
import EditProduct from "@/components/EditProduct.vue";
import CRUDProductListItem from "@/components/CRUDProductListItem.vue";

export default {
  created() {
    this.getProducts();
  },

  data() {
    return {
      products: [],
      productListVisibility: false,
    };
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

  methods: {
    getProducts: async function() {
      const response = await get(PRODUCTS_URL);
      this.products = response;
    },
    changeVisibility(payload) {
      if (payload === "create") {
        this.productListVisibility = false;
      } else this.productListVisibility = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.list-items > :nth-child(odd) {
  background-color: rgb(248, 231, 237);
}

.list-header {
  width: 60%;
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
