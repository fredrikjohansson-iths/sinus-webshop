<template>
  <section class="crud-form">
    <section class="crud-image">
      <img src="product.imgFile" alt="" />
    </section>
    <section class="crud-details">
      <label for="title">Product Name</label>
      <input type="text" id="title" v-model="product.title" />
      <label for="price">Price</label>
      <input type="text" id="price" v-model="product.price" />
      <label for="category">Category</label>
      <input type="text" id="category" v-model="product.category" />
      <label for="short">Short description</label>
      <input type="text" id="short" v-model="product.shortDesc" />
      <label for="id">Serial Number</label>
      <input type="text" id="id" v-model="product.id" disabled />
      <section class="crud-buttons">
        <button @click="createNewProduct">Create product</button>
      </section>
    </section>
    <section class="crud-description">
      <label for="long-desc">Full description</label>
      <textarea type="text" name="" id="long-desc" rows="12" />
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: "",
        price: 0,
        shortDesc: "",
        longDesc: "",
        imgFile: "",
        category: "",
      },
    };
  },

  methods: {
    createNewProduct() {
      this.$store.dispatch("createProduct", this.product);
    },
  },
};
</script>

<style lang="scss" scoped>
.crud-form {
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: khaki;
  padding: 20px;
}
.create .crud-details {
  display: flex;
  flex-direction: column;
  width: 30%;
}
.crud-image,
.crud-description {
  width: 30%;
}
.crud-description {
  display: flex;
  flex-direction: column;
}
input[type="text"] {
  width: 100%;
  padding: 12px 12px;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>
