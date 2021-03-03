<template>
  <div id="nav">
    <router-link to="/products">Our Products</router-link> |
    <!-- <router-link to="/MyAccount" v-if="userStatus">    </router-link> -->
    <span>ANVÄNDAREN INLOGGAD |</span>

    <router-link to="/admin">Admin</router-link> |

    <a v-if="!userSession" @click="changeLoginModalStatus" >Login |</a>

    <a class="shopping-cart-link" @click="changeCartStatus"
      >Shopping Cart ({{ shoppingCartLength }})</a
    >

    <ShoppingCart v-if="cartModalStatus" @closeCart="changeCartStatus" />
    <LoginModal
    v-if="!userSession"
      v-show="loginModalStatus"
      @closeLogin="changeLoginModalStatus"
    />
  </div>
</template>

<script>
import LoginModal from "@/components/LoginModal.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";

export default {
  data() {
    return {
      loginModalStatus: false,
      cartModalStatus: false
    };
  },

  components: {
    LoginModal,
    ShoppingCart
  },

  methods: {
    changeLoginModalStatus() {
      this.loginModalStatus = !this.loginModalStatus;
    },
    changeCartStatus() {
      this.cartModalStatus = !this.cartModalStatus;
    }
  },

  computed: {
    userSession() {
      return this.$store.state.a.session.active;
    },
    shoppingCartLength() {
      return this.$store.getters.getShoppingCartLength;
    }
  }
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    cursor: pointer;

    &.router-link-exact-active {
      color: #9c2e8e;
    }
  }
  .text-bold {
    font-weight: bold;
  }

  .text-italic {
    font-style: italic;
  }
}
</style>
