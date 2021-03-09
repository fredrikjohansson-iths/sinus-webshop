<template>
  <div id="site-header">
    <div id="nav">
      <router-link title="Browse our products" to="/products"
        >Products</router-link
      >
      <router-link
        title="Admin configuration view"
        v-if="adminSession"
        to="/admin"
        ><i class="pointer grow fas fa-users-cog"></i
      ></router-link>

      <a
        title="Sign in to Sinus"
        v-if="!userSession"
        @click="changeLoginModalStatus"
        >Login</a
      >
      <LoginModal
        v-if="!userSession"
        v-show="loginModalStatus"
        @closeLogin="changeLoginModalStatus"
      />
      <ShoppingCart v-if="cartModalStatus" @closeCart="changeCartStatus" />
      <a
        class="shopping-cart-link"
        title="View your shopping cart"
        @click="changeCartStatus"
      >
        <i class="fas fa-shopping-cart"></i>({{ shoppingCartLength }})</a
      >
      <router-link title="View your account" v-if="userSession" to="/profile">
        <i class="grow fas fa-user"> </i><a> {{ userName }}</a></router-link
      ><i
        id="signout"
        @click="signout"
        v-if="userSession"
        title="Sign out"
        class="pointer grow fas fa-sign-out-alt"
      ></i>
    </div>
  </div>
</template>

<script>
import LoginModal from "@/components/LoginModal.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
import * as Cookies from "js-cookie";

export default {
  data() {
    return {
      loginModalStatus: false,
      cartModalStatus: false,
    };
  },
  components: {
    LoginModal,
    ShoppingCart,
  },

  methods: {
    signout() {
      Cookies.remove("vuex");
      this.$router.go();
    },
    changeLoginModalStatus() {
      this.loginModalStatus = !this.loginModalStatus;
    },
    changeCartStatus() {
      this.cartModalStatus = !this.cartModalStatus;
    },
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
    },
    userName() {
      return this.$store.state.a.user.name;
    },
  },
};
</script>

<style lang="scss" scoped>
#signout {
  left: 98.5%;
  position: absolute;
  top: 1%;
}
.grow {
  transition: all 0.3s ease-in-out;
}
.grow:hover {
  transform: scale(1.3);
}

.pointer {
  cursor: pointer;
}

#nav {
  padding: 30px;
  display: flex;
  gap: 60px;
  width: 500px;
  justify-content: flex-end;
}
a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  cursor: pointer;

  &.router-link-exact-active {
    color: whitesmoke;
  }
}

i {
  color: #2c3e50;
}
</style>
