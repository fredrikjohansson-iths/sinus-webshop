<template>
  <div id="site-header">
    <div id="nav">
      
      <router-link title="Browse our products" to="/products">Our Products</router-link>
      <!-- <router-link to="/MyAccount" v-if="userStatus" /> -->

      <router-link title="Admin configuration view" v-if="adminSession" to="/admin">Admin</router-link>

      <a title="Sign in to Sinus" v-if="!userSession" @click="changeLoginModalStatus">Login</a>

      <a class="shopping-cart-link" title="View your shopping cart" @click="changeCartStatus"
        >Shopping Cart ({{ shoppingCartLength }})</a
      >
      <router-link title="View your account" v-if="userSession" to="/profile"
        >
          <i class="grow fas fa-user"></i></router-link><i id="signout" v-if="userSession" title="Sign out" class="pointer grow fas fa-sign-out-alt"></i>
    </div>
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
    adminSession() {
      return this.$store.state.adminSession;
    },
    shoppingCartLength() {
      return this.$store.getters.getShoppingCartLength;
    }
  }
};
</script>

<style lang="scss" scoped>

#signout {left: 98.5%;
position: absolute;
top: 1%;}
.grow { transition: all .3s ease-in-out; }
.grow:hover { transform: scale(1.3); }

.pointer {cursor: pointer;}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  width: 300px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    cursor: pointer;

    &.router-link-exact-active {
      color: whitesmoke;
    }
  }
  i {color: #2c3e50;}
  .text-bold {
    font-weight: bold;
  }

  .text-italic {
    font-style: italic;
  }
}
</style>
