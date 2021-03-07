<template>
  <section class="crud-form">
    <section class="crud-image">
      <img :src="editProduct.imgFile" alt="" />
    </section>
    <section class="crud-details">
      <label for="title">Product Name</label>
      <input type="text" id="title" v-model="editProduct.title" />
      <label for="price">Price</label>
      <input type="number" id="price" v-model="editProduct.price" />
      <label for="category">Category</label>
      <input type="text" id="category" v-model="editProduct.category" />
      <label for="short">Short description</label>
      <input type="text" id="short" v-model="editProduct.shortDesc" />
      <label for="id">Serial Number</label>
      <input type="text" id="id" :value="editProduct._id" disabled />
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
    editProduct() {
      return this.$store.state.productModal;
    },
  },
  data() {
    return {
      prodData: {
        title: "",
        price: null,
        shortDesc: "",
        longDesc: "",
        imgFile: "add-img.svg",
        _id: "",
        category: "",
      },
    };
  },
  methods: {
    updateProduct() {
      console.log(this.prodData);
      this.$store.dispatch(
        "patchProducts",
        this.this.prodData._id,
        this.prodData
      );
      this.$store.dispatch("getProducts");
      location.reload();
    },

    removeProduct() {
      confirm("Are you sure you want to delete this item?");
      this.$store.dispatch("deleteProduct", this.editableProduct.id);
      //   this.$store.commit("setEditableProduct", {});
    },
  },
  watch: {
    productToEdit() {
      this.prodData = this.editProduct;
    },
  },
  // watch: {
  //   editableProduct(val) {
  //     if (val) {
  //       this.prodData.title = this.editableProduct.title;
  //       this.prodData.price = this.editableProduct.price;
  //       this.prodData.shortDesc = this.editableProduct.shortDesc;
  //       this.prodData.longDesc = this.editableProduct.longDesc;
  //       this.prodData.imgFile = this.editableProduct.imgFile;
  //       this.prodId = this.editableProduct._id;
  //     }
  //   },
  // },
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
