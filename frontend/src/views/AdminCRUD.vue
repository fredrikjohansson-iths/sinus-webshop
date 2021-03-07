<template>
  <div id="admin-view">
    <section class="product-crud">
      <EditProduct />

      <section class="crud-product-list">
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
    </section>

    <section class="order-list">
      <OrderList v-for="item in orders" :key="item._id" :order="item" />
    </section>
  </div>
</template>

<script>
import EditProduct from "@/components/EditProduct.vue";
import CRUDProductListItem from "@/components/CRUDProductListItem.vue";
import OrderList from "@/components/OrderList.vue";

export default {
  data() {
    return {
      productListVisibility: false,
    };
  },
  computed: {
    products() {
      return this.$store.state.allProducts;
    },

    userRole() {
      return this.$store.state.a.user.role;
    },
    orders() {
      return this.$store.state.a.order;
    },
  },
  components: {
    EditProduct,
    CRUDProductListItem,
    OrderList,
  },

  methods: {
    changeVisibility(payload) {
      if (payload === "create") {
        this.productListVisibility = false;
      } else this.productListVisibility = true;
    },
  },
};
</script>

<style lang="scss" scoped>
#admin-view {
  width: 80%;
}
.Prod-Order {
  display: flex;
  flex-direction: row;
}
.list-items > :nth-child(odd) {
  background-color: rgb(248, 231, 237);
}
.order-list > :nth-child(odd) {
  background-color: khaki;
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
