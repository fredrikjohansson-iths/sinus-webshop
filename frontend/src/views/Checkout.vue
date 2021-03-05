<template>
  <div id="checkout" v-if="!orderStatus">
    <section class="header centered">
      <h2>Your Cart</h2>
    </section>
    <section class="information">
      <section class="items">
        <ul v-for="item in uniqueCartProducts" :key="item._id">
          <ShoppingCartItem :title="item.title" :id="item._id" :item="item" />
        </ul>
      </section>
      <section class="delivery"></section>
      <section class="payment"></section>
    </section>
    <section class="cta centered">
      <button @click="createOrder" class="btn-primary btn-product-description">Take my Money</button>
    </section>
  </div>
  <OrderComplete v-else class="order-finished" />
</template>

<script>
import { POST_ORDER, makeOrder } from "@/api/post.js/";
import ShoppingCartItem from "@/components/ShoppingCartItem.vue";
import OrderComplete from "@/components/OrderComplete.vue";

export default {
  data() {
    return {
      orderStatus: false,
    };
  },

  methods: {
    createOrder: async function() {
      const response = await makeOrder(POST_ORDER, this.getCartItemsId);
      if (response.status === 200) {
        //order validation
        this.$store.dispatch("getOrders");
        this.$store.commit("clearShoppingCart");
        this.orderStatus = !this.orderStatus;
      }
    },
  },

  components: {
    ShoppingCartItem,
    OrderComplete,
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
.information {
  border-top: black 1px solid;
  min-height: 400px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.items,
.delivery,
.payment {
  width: 33%;
  border-left: black 1px solid;
}
</style>
