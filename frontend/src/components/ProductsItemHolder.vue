<template>
  <div id="product">
    <section class="centered" @click="change">
      <p v-if="editMode">Halloj</p>
      <h3>{{ product.title }}</h3>
      <p>Price: {{ product.price }}</p>
      <img class="img-product" src="../assets/hoodie-fire.png" alt="product image"/>
    </section>
    <section class="centered">
      <button class="product-add" @click="addToCart" v-if="!editMode">Add to cart</button>
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
