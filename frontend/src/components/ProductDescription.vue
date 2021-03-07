<template>
  <div class="product-description">
    <div class="product-innerbox">
      <div class="product-imagebox">
        <img class="img-product description-img-product" alt="product image" />
      </div>
      <div class="product-descriptionbox">
        <p class="product-title">{{ clickedProduct.title }}</p>
        <p class="product-described">{{ clickedProduct.longDesc }}</p>
        <p class="product-price">{{ clickedProduct.price }} sek</p>
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

export default {
  data() {
    return {
      product: this.clickedProduct,
    };
  },

  computed: {
    clickedProduct() {
      return this.$store.state.activeProduct;
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
