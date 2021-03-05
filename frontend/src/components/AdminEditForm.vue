<template>
  <section class="crud-form">
    <section class="crud-image">
      <img :src="editableProduct.imgFile" alt="" />
    </section>
    <section class="crud-details">
      <label for="title">Product Name</label>
      <input type="text" id="title" :value="editableProduct.title" />
      <label for="price">Price</label>
      <input type="text" id="price" :value="editableProduct.price" />
      <label for="category">Category</label>
      <input type="text" id="category" :value="editableProduct.category" />
      <label for="short">Short description</label>
      <input type="text" id="short" :value="editableProduct.shortDesc" />
      <label for="id">Serial Number</label>
      <input type="text" id="id" v-model="editableProduct.id" disabled />
      <section class="crud-buttons">
        <button @click="updateProduct">
          Update product
        </button>
        <button @click="removeProduct">
          Remove this product
        </button>
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
  computed: {
    editableProduct() {
      return this.$store.state.editableProduct;
    },
  },
  methods: {
    updateProduct() {
      const prodData = {
        title: this.editableProduct.title,
        price: this.editableProduct.price,
        shortDesc: this.editableProduct.shortDesc,
        longDesc: this.editableProduct.longDesc,
        imgFile: this.editableProduct.imgFile,
        category: this.editableProduct.category,
      };
      const prodId = this.editableProduct.id;
      this.$store.dispatch("patchProduct", prodId, prodData);
    },
    removeProduct() {
      confirm("Are you sure you want to delete this item?");
      this.$store.dispatch("deleteProduct", this.editableProduct.id);
      //   this.$store.commit("setEditableProduct", {});
    },
  },
};
</script>

<style lang="scss" scoped>
.crud-form {
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: rosybrown;
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
.crud-buttons {
  display: flex;
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
