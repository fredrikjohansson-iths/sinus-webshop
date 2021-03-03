import { createStore } from "vuex";
import axios from "axios";

const moduleSession = {
  namespaced: true,
  state: {
    user: Object,
    order: Object
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {},
  getters: {}
};

const moduleAPI = {
  state: { headers: { Authorization: String } },
  mutations: {
    updateToken(state, token) {
      state.headers.Authorization = { Authorization: token };
    }
  },
  actions: {
    auth({ commit, state }, cred) {
      axios
        .post("http://localhost:5000/api/auth", cred)
        .then(response => {
          var token = response.data.token;
          commit("updateToken", token);
          console.log("action triggered", state.headers);
        })
        .catch(error => {
          console.log(error);
        });
    },

    getUser({ state, commit, rootStore }) {
      axios
        .get("http://localhost:5000/api/me", state.headers)
        .then(response => {
          var payload = response.data;
          commit("setUser", payload, { root: true });
          console.log("success", rootStore.state.a.user);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {}
};

export default createStore({
  state: {
    //controls if the product description modal is open or closed
    productModalStatus: false,

    //sets the ID of the chosen product
    productModalId: "",

    //controls if the product description modal is open or closed
    loginStatus: false,

    //holds the information of the logged in user
    userData: {},

    editProducts: false,

    shoppingCart: [],
  },

  getters: {
    getShoppingCartLength: (state) => {
      return state.shoppingCart.length;
    },
    getAmountOfProduct: (state) => (id) => {
      return state.shoppingCart.filter((item) => id === item._id).length;
    },
    getTotalSum: (state) => {
      let sum = 0;
      state.shoppingCart.forEach((item) => (sum += item.price));
      return sum;
    },
    getCartItemsId: (state) => {
      let array = state.shoppingCart.map((item) => item._id);
      return array;
    },
  },
  mutations: {
    changeProductModalStatus(state) {
      state.productModalStatus = !state.productModalStatus;
    },
    changeProductModalId(state, id) {
      state.productModalId = id;
    },
    changeLoginStatus(state) {
      state.loginStatus = !state.loginStatus;
    },
    setUserData(state, user) {
      state.userData = user;
    },
    addProductToCart(state, product) {
      state.shoppingCart.push(product);
    },
    removeSingleItem(state, index) {
      state.shoppingCart.splice(index, 1);
    },
    setShoppingCart(state, newArray) {
      state.shoppingCart = newArray;
    },
    clearShoppingCart(state) {
      state.shoppingCart = [];
    },
  },

  actions: {
    addProductToCart({ commit }, product) {
      commit("addProductToCart", product);
    },

    removeOneItem({ commit, state }, product) {
      var idx = state.shoppingCart.indexOf(product);
      if (idx >= 0) {
        commit("removeSingleItem", idx);
      }
    },

    removeProductFromCart({ commit, state }, id) {
      const array = state.shoppingCart.filter((item) => item._id !== id);
      commit("setShoppingCart", array);
    },

    changeProductModal({ commit }, id) {
      commit("changeProductModalStatus");
      commit("changeProductModalId", id);
    }
  },
  modules: { a: moduleSession, b: moduleAPI }
});
