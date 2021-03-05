<template>
  <div id="product">
    <section class="centered">
      <h3>{{ product.title }}</h3>
      <p>${{ product.price }}</p>
      <img
        class="img-product"
        src="../assets/hoodie-fire.png"
        alt="product image"
      />
    </section>
    <section class="centered product-btn-section">
      <div class="div-btn-view">
        <button class="btn-primary btn-product" @click="change">
          View product
        </button>
      </div>
      <div class="div-btn-cart">
        <button class="btn-primary btn-product" @click="addToCart">
          Add to cart
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },

    editMode: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    getImgUrl(pic) {
      return require(pic);
    },

    change() {
      this.$store.dispatch("changeProductModal", this.product._id);
    },

    addToCart() {
      this.$store.dispatch("addProductToCart", this.product);
    },
  },
};
</script>
<style lang="scss" scoped>
#product {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
// button {
//   width: 80px;
//   height: 40px;
//   border-radius: 40px;
//   background-color: #2c3e50;
//   color: white;
// }
</style>
