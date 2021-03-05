<template>
  <div id="product">
    <section class="centered" >
      <!-- <section class="centered" @click="change"> -->
      <p v-if="editMode">Halloj</p>
      <h3>{{ product.title }}</h3>
      <p>Price: {{ product.price }}</p>
      <img class="img-product" src="../assets/hoodie-fire.png" alt="product image"/>
    </section>
    <section class="centered product-btn-section">
      <div>
          <button class="btn-primary btn-product" @click="change">View product</button>
      </div>
      <div>
        <button class="btn-primary btn-product" @click="addToCart" v-if="!editMode">Add to cart</button>
      </div>
      <button v-if="editMode">Edit</button>
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

  data() {
    return {};
  },

  methods: {
    getImgUrl(pic) {
      return require(pic);
    },

    change() {
      if (!this.editMode) {
        this.$store.dispatch("changeProductModal", this.product._id);
      } else if (this.editMode) {
        const editProd = {
          title: this.product.title,
          price: this.product.price,
          shortDesc: this.product.shortDesc,
          longDesc: this.product.longDesc,
          imgFile: this.product.imgFile,
          id: this.product._id,
        };
        this.$store.commit("setEditableProduct", editProd);
      }
    },

    addToCart() {
      this.$store.dispatch("addProductToCart", this.product);
    },
  },
};
</script>
<style lang="scss" scoped>

// button {
//   width: 80px;
//   height: 40px;
//   border-radius: 40px;
//   background-color: #2c3e50;
//   color: white;
// }
</style>