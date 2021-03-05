import { createStore } from "vuex";
import axios from "axios";

const moduleSession = {
  state: {
    session: { active: false },
    user: Object,
    order: [],
  },
  getters: {
    getAmountOfItems: (state) => {
      let array = state.order.map((item) => item.amount);
      console.log(array);
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
          dispatch("getOrders");
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
    getOrders({ state, commit }) {
      axios
        .get("http://localhost:5000/api/orders", {
          headers: { Authorization: state.token },
        })
        .then((response) => {
          const payload = response.data;
          console.log(payload);
          commit("setOrderList", payload, { root: true });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    patchProducts({ state }, id, payload) {
      axios
        .patch("http://localhost:5000/api/products/" + id, payload, {
          headers: { Authorization: state.token },
        })
        .then((response) => {
          console.log(response);
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
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error, newUser);
        });
    },
    deleteProduct({ commit, state }, id) {
      axios
        .delete("http://localhost:5000/api/products/" + id, {
          headers: { Authorization: state.token },
        })
        .then((response) => {
          alert(response.data.message);
          commit("setEditableProduct", {});
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    createProduct({ state }, payload) {
      axios
        .post("http://localhost:5000/api/products/" + payload, {
          headers: { Authorization: state.token },
        })
        .then((response) => {
          alert(response.data.message);
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

    //sets the ID of the chosen product
    productModalId: "",

    //controls if the product description modal is open or closed
    loginStatus: false,

    //holds the information of the logged in user
    userData: {},

    editProducts: false,

    shoppingCart: [],

    editableProduct: {},

    productList: [],
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
    setEditableProduct(state, prod) {
      state.editableProduct = prod;
    },
    setProducts(state, products) {
      state.productList = products;
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
    },
  },
  modules: { a: moduleSession, b: moduleApi },
});
