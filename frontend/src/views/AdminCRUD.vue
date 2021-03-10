<template>
  <div id="admin-view">
    <h1>Hello Admin!</h1>
    <h2>Create, read, edit and delete right here.</h2>
    <section class="product-crud">
      <EditProduct />

      <div class="list-items">
        <h3>All Products</h3>

        <CRUDProductListItem
          v-for="product in products"
          :key="product._id"
          :product="product"
        />
      </div>
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
  padding-top: 80px;
  padding-bottom: 80px;
}
.product-crud {
  display: flex;
  justify-content: center;
  gap: 80px;
  padding-top: 80px;
}
.list-items {
  height: max-content;
  width: 30%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  overflow-x: hidden;
  padding: 50px;
  text-align: center;
}
.list-items > :nth-child(even) {
  background-color: rgb(248, 231, 237);
}
</style>
