import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";
import axios from "axios";

var inFiveMinutes = new Date(new Date().getTime() + 5 * 60 * 1000);

const moduleSession = {
  state: {
    session: { active: false },
    user: Object,
    order: Array,
    productsUrl: "http://localhost:5000/api/products",
  },
  getters: {
    getAmountOfItems: (state) => {
      let array = state.order.map((item) => item.amount);
      return array;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setOrderList(state, payload) {
      state.order = payload;
    },
    sessionState(state) {
      state.session.active = true;
    },
    isAdmin(state) {
      state.user.role === "admin";
    },
  },
  actions: {},
};

const moduleApi = {
  state: { token: String },

  mutations: {
    updateToken(state, token) {
      state.token = token;
    },
  },

  actions: {
    auth({ commit, dispatch }, cred) {
      axios
        .post("http://localhost:5000/api/auth", cred)
        .then((response) => {
          var token = response.data.token;
          commit("updateToken", token);
          commit("sessionState", { root: true });
          dispatch("getUser");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getUser({ state, commit }) {
      axios
        .get("http://localhost:5000/api/me", {
          headers: { Authorization: state.token },
        })
        .then((response) => {
          const payload = response.data;
          commit("setUser", payload, { root: true });
          if (payload.role === "admin") {
            commit("setAdminSession", { root: true });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getSingleProduct({ state, commit }, id) {
      axios
        .get("http://localhost:5000/api/products/" + id)
        .then((response) => {
          const payload = response.data;
          commit("setActiveProduct", payload, { root: true });
          console.log(payload, state.token);
          return payload;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProducts({ commit }) {
      axios
        .get("http://localhost:5000/api/products")
        .then((response) => {
          this.response = response.data;
          commit("updateProducts", this.response, { root: true });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getOrders({ state, commit }) {
      axios
        .get("http://localhost:5000/api/orders", {
          headers: { Authorization: state.token },
        })
        .then((response) => {
          console.log(response);
          commit("setOrderList", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    patchProducts({ state, commit, rootState }, payload) {
      const url =
        "http://localhost:5000/api/products/" + rootState.activeProduct._id;
      axios
        .patch(url, payload, {
          headers: { Authorization: state.token },
        })
        .then((response) => {
          this.response = response.data;
          commit("setActiveProduct", {});
        })
        .catch((error) => {
          console.log(error);
        });
    },
    postOrders({ state, commit }, payload) {
      axios
        .post("http://localhost:5000/api/orders/", payload, {
          headers: { Authorization: state.token },
        })
        .then((response) => {
          commit("setOrderList", payload, { root: true });
          this.response = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    patchUser({ state, dispatch }, payload) {
      axios
        .patch("http://localhost:5000/api/me/", payload, {
          headers: { Authorization: state.token },
        })
        .then((response) => {
          dispatch("getUser");
          return response.data.message;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    postUser({ state }, newUser) {
      console.log(state.token);
      axios
        .post("http://localhost:5000/api/register/", newUser)
        .then((response) => {
          this.response = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error, newUser);
        });
    },
    deleteProduct({ state }, id) {
      axios
        .delete("http://localhost:5000/api/products/" + id, {
          headers: { Authorization: state.token },
        })
        .then((response) => {
          this.response = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    postProduct({ state }, payload) {
      axios
        .post("http://localhost:5000/api/products/", payload, {
          headers: { Authorization: state.token },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {},
};

export default createStore({
  state: {
    adminSession: false,
    //controls if the product description modal is open or closed
    productModalStatus: false,

    //holds the chosen product
    activeProduct: {},

    allProducts: [],

    //controls if the product description modal is open or closed
    loginStatus: false,

    //holds the information of the logged in user
    userData: {},

    editProducts: false,

    shoppingCart: [],

    editableProduct: {},

    productList: [],

    editStatus: false,
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
    setAdminSession(state) {
      state.adminSession = true;
    },
    changeProductModalStatus(state) {
      state.productModalStatus = !state.productModalStatus;
    },
    setActiveProduct(state, prod) {
      state.activeProduct = prod;
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
    setEditableProduct(state, prod) {
      console.log(prod);
      state.editableProduct = prod;
    },
    setProducts(state, products) {
      state.productList = products;
    },
    updateProducts(state, payload) {
      state.allProducts = payload;
    },
    changeEditStatus(state) {
      state.editStatus = !state.editStatus;
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
  },
  modules: { a: moduleSession, b: moduleApi },
  // plugins: [createPersistedState],
  plugins: [
    createPersistedState({
      paths: ["moduleSession"],
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) =>
        Cookies.set(key, state, { expires: inFiveMinutes }),
    }),
  ],
});
