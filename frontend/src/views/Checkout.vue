<template>
  <div id="checkout" v-if="!orderStatus">
    <section class="header" v-if="cartProducts.length > 0">
      <h2>Manage your purchase here.</h2>
    </section>
    <section class="information">
      <section class="items">
        <ul v-for="item in uniqueCartProducts" :key="item._id">
          <ShoppingCartItem :title="item.title" :id="item._id" :item="item" />
        </ul>
      </section>
      <section>
        <CartForm class="cart-form-container" v-if="cartProducts.length > 0" />
        <div v-else class="empty-cart">
          <p>You have no items here baby, do some shopping and come back!</p>
        </div>
      </section>
    </section>
    <button
      @click="updateOrders"
      class="btn-primary btn-product-description"
      v-if="cartProducts.length > 0"
    >
      Take my Money
    </button>
  </div>
  <OrderComplete v-else class="order-finished" />
</template>

<script>
import ShoppingCartItem from "@/components/ShoppingCartItem.vue";
import OrderComplete from "@/components/OrderComplete.vue";
import CartForm from "@/components/CartForm.vue";
export default {
  data() {
    return {
      orderStatus: false,
    };
  },

  methods: {
    updateOrders() {
      this.$store.dispatch("postOrders", this.getCartItemsId);
      this.$store.dispatch("getOrders");
      this.$store.commit("clearShoppingCart");
      this.orderStatus = !this.orderStatus;
    },
  },

  components: {
    ShoppingCartItem,
    OrderComplete,
    CartForm,
  },

  computed: {
    cartProducts() {
      return this.$store.state.shoppingCart;
    },
    uniqueCartProducts() {
      return [...new Set(this.cartProducts.map((item) => item))];
    },
    getCartItemsId() {
      const order = {
        items: this.$store.getters.getCartItemsId,
      };
      return order;
    },
  },
};
</script>

<style lang="scss" scoped>
#checkout,
.empty-cart {
  width: 80%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  padding: 40px;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 80px;
}
.empty-cart {
  height: 100vh;
}
.information {
  display: flex;
  justify-content: space-around;
}
.btn-primary {
  align-self: center;
  margin-top: 40px;
}
</style>
