<template>
  <div class="product-description">
    <div class="product-innerbox">
      <div class="product-imagebox">
        <img
          class="img-product description-img-product"
          src="../assets/hoodie-fire.png"
          alt="product image"
        />
      </div>
      <div class="product-descriptionbox">
        <p class="product-title">{{ product.title }}</p>
        <p class="product-described">{{ product.longDesc }}</p>
        <p class="product-price">{{ product.price }} sek</p>
        <p class="centered">
          <button
            @click="addToCart"
            class="btn-primary btn-product-description"
          >
            Take my money
          </button>
        </p>
      </div>
      <span class="product-closeimage" @click="handleClick"
        ><i class="fas fa-times"></i
      ></span>
      <div></div>
    </div>
  </div>
</template>

<script>
import { getProductById, PRODUCTID_URL } from "@/api/get.js";

export default {
  created: async function() {
    const response = await getProductById(PRODUCTID_URL, this.modalId);
    this.product = response.data;
  },

  data() {
    return {
      show: false,
      product: [],
    };
  },

  computed: {
    modalId() {
      return this.$store.state.productModalId;
    },
    // getImgUrl(pic) {
    //   return require("../assets/" + pic);
    // },
    getImgUrl() {
      // console.log(this.product.imgFile);
      // return require("../assets/" + this.product.imgFile);
      return require("../assets/skateboard-generic.png");
    },
  },

  methods: {
    handleClick: function() {
      this.$store.commit("changeProductModalStatus");
    },
    addToCart() {
      this.$store.dispatch("addProductToCart", this.product);
    },
  },
};
</script>

<style lang="scss">
table {
  border-collapse: collapse;
  width: 100%;
}
tr {
  text-align: left;
}
</style>
