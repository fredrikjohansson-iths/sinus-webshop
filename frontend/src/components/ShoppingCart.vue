<template>
  <div id="shopping-cart">
    <i
      id="closeCart"
      class="fas fa-times"
      @click="closeCart"
      v-if="totalSum"
    ></i>

    <div v-if="totalSum">
      <ul v-for="item in uniqueCartProducts" :key="item._id">
        <ShoppingCartItem :item="item" />
      </ul>
      <div class="bottom-sum-cta">
        <p class="total">
          <strong> Total: {{ totalSum }}</strong>
        </p>
        <router-link to="/Checkout">
          <button @click="closeCart">
            Checkout
          </button>
        </router-link>
      </div>
    </div>
    <div v-else>
      <p>Your shopping cart is empty!</p>
    </div>
  </div>
</template>

<script>
import ShoppingCartItem from "@/components/ShoppingCartItem.vue";

export default {
  created() {
    if (!this.totalSum) {
      setTimeout(this.closeCart, 1500);
    }
  },

  components: {
    ShoppingCartItem,
  },

  computed: {
    cartProducts() {
      return this.$store.state.shoppingCart;
    },

    uniqueCartProducts() {
      return [...new Set(this.cartProducts.map((item) => item))];
    },

    totalSum() {
      return this.$store.getters.getTotalSum;
    },
  },
  methods: {
    closeCart() {
      this.$emit("closeCart");
    },
  },
};
</script>

<style lang="scss" scoped>
#shopping-cart {
  position: absolute;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: animatetop;
  animation-duration: 0.4s;
  padding: 16px;
  #closeCart {
    float: right;
  }

  button {
    width: 80px;
    height: 30px;
    border-radius: 20px;
    background-color: #2c3e50;
    color: white;
  }
}
.bottom-sum-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/* Add Animation */
@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
</style>
