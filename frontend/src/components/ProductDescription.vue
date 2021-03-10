<template>
  <div class="product-description">
    <div class="product-innerbox">
      <div class="product-imagebox">
        <img class="img-product description-img-product" :src="getImgUrl(clickedProduct.imgFile)" alt="product image" />
      </div>
      <div class="product-descriptionbox">
        <p class="product-title">{{ clickedProduct.title }}</p>
        <p class="product-described">{{ clickedProduct.longDesc }}</p>
        <p class="product-price">${{ clickedProduct.price }}</p>
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
    getImgUrl(pic) {
      return require('../assets/'+pic);
    },
  },
};
</script>

<style lang="scss">

.description {
  &-img-product {
    margin-top: 25%;
    margin-left: 10%;
    width: 75%;
  }
}

.product {
  &-description {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 100%;
    left: -8px;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.85);
  }
  &-innerbox {
    display: flex;
    background-color: white;
    width: 768px;
    height: 508px;
  }
  &-descriptionbox {
    margin-top: 2rem;
    padding: 5px;
    width: 50%;
  }
  &-described {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    height: 150px;
    vertical-align: middle;
    color: rgba(0, 0, 0, 0.6);
  }
  &-closeimage {
    z-index: 999999;
    padding: 10px;
    color: #000;
    cursor: pointer;
  }
  &-title {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 44px;
    padding-bottom: 2rem !important;
  }
  &-price {
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 35px;
    color: #000000;
  }
  &-imagebox {
    margin: 20px;
    width: 50%;
  }
  .productPhoto {
    width: 356px;
    height: 507px;
    left: 46px;
    top: 33px;
  }
}
</style>
