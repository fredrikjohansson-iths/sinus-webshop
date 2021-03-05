<template>
  <div class="product-description">
    <div class="product-innerbox">
      <div class="product-imagebox">
        <img class="img-product" src="../assets/hoodie-fire.png" alt="product image"/>
      </div>
      <div class="product-descriptionbox">
        <table>
          <tr class="product-title">
            {{
              product.title
            }}
          </tr>
          <tr class="product-described">
            {{
              product.longDesc
            }}
          </tr>
          <tr class="product-price">
            {{
              product.price
            }}
            sek
          </tr>
          <tr class="product-size"></tr>
          <tr class="product-review"></tr>

          <button class="btn-primary btn-product-description">Take my money</button>
        </table>
      </div>
      <span class="product-closeimage" @click="handleClick">X</span>
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
