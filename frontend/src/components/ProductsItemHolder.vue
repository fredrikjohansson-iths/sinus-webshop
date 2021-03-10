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
      this.$store.dispatch("changeProductModalStatus", this.product._id);
      this.$store.dispatch("getSingleProduct", this.product._id);
    },

    addToCart() {
      this.$store.dispatch("addProductToCart", this.product);
    },
  },
};
</script>
<style lang="scss" scoped>

#product {
  padding: 10px;
  background: #ffffff;
  /* small drop */
  box-shadow: 10px 10px 14px rgba(0, 0, 0, 0.06);
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 260px;
  height: 400px;
}

.img-product {
  width: 70%;
}

</style>
