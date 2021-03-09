<template>
  <section class="crud-form">
    <button id="edit" @click="mirrorData" v-if="!enableEdit">
      Edit
    </button>

    <section class="crud-image">
      <img src="" alt="" />
    </section>
    <section class="crud-details container">
      <label for="title">Product Name</label>
      <input type="text" id="title" v-model="editedProd.title" />
      <label for="price">Price</label>
      <input type="number" id="price" v-model="editedProd.price" />
      <label for="category">Category</label>
      <input
        type="text"
        id="category"
        :value="clickedProduct.category"
        disabled
      />
      <label for="short">Short description</label>
      <input type="text" id="short" v-model="editedProd.shortDesc" />
      <label for="id">Product Id</label>
      <input type="text" id="id" :value="clickedProduct._id" disabled />
      <section class="crud-description">
        <label for="long-desc">Full description</label>
        <textarea
          type="text"
          name=""
          id="long-desc"
          rows="12"
          v-model="editedProd.longDesc"
        />
      </section>
      <section class="crud-buttons">
        <button @click="updateProduct">
          Update product
        </button>
        <button @click="removeProduct">
          Remove this product
        </button>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  computed: {
    clickedProduct() {
      return this.$store.state.activeProduct;
    },
  },
  components: {},
  data() {
    return {
      editedProd: {
        title: "",
        price: null,
        shortDesc: "",
        longDesc: "",
        imgFile: "",
      },
    };
  },
  methods: {
    createNewProduct() {
      this.$store.dispatch("postProduct", this.product);
      this.$store.commit("setActiveProduct", {});
    },
    updateProduct() {
      this.$store.dispatch("patchProducts", this.editedProd);
      this.$store.commit("setActiveProduct", {});
      this.$store.dispatch("getProducts");
      this.$router.go();
    },
    mirrorData() {
      this.editedProd.title = this.clickedProduct.title;
      this.editedProd.price = this.clickedProduct.price;
      this.editedProd.shortDesc = this.clickedProduct.shortDesc;
      this.editedProd.longDesc = this.clickedProduct.longDesc;
      this.editedProd.imgFile = this.clickedProduct.imgFile;
      console.log(this.editedProd);
    },
  },
};
</script>

<style lang="scss" scoped>
.crud-form {
  display: flex;
  flex-direction: column;
}
.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 60%px;
  max-width: 50%;
  min-height: 480px;
  margin-left: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input[type="text"],
select,
textarea {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}
input[type="password"],
select,
textarea {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

input[type="numbers"],
select,
textarea {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type="submit"] {
  color: rgb(185, 180, 180);
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>
