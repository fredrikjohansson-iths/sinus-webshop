<template>
  <div id="crud-component">
    <section class="crud-image">
      <img src="" alt="" />
    </section>
    <section class="crud-details">
      <form @submit="updateProduct">
        <label for="title">Product Name</label>
        <input type="text" id="title" v-model="editableProduct.title" />
        <label for="short">Short description</label>
        <input type="text" id="short" :value="editableProduct.shortDesc" />
        <label for="price">Price</label>
        <input type="text" id="price" :value="editableProduct.price" />
        <label for="id">Serial Number</label>
        <input type="text" id="id" v-model="editableProduct.id" disabled />
        <input type="submit" value="Update product" v-if="editableProduct.id" />
        <input type="submit" value="Create product" v-else />
        <button @click="removeProduct" v-if="editableProduct.id">
          Remove this product
        </button>
      </form>
    </section>
    <section class="crud-description">
      <label for="long-desc">Full description</label>
      <textarea type="text" name="" id="long-desc" rows="12"></textarea>
    </section>
    <section></section>
  </div>
</template>

<script>
// import { PATCH_PRODUCT, patchProduct } from "@/api/patch.js";
import { DELETE_PRODUCT, deleteProduct } from "@/api/delete.js";

export default {
  computed: {
    editableProduct() {
      return this.$store.state.editableProduct;
    }
  },
  methods: {
    updateProduct() {
      const prodData = {
        title: this.editableProduct.title,
        price: this.editableProduct.price,
        shortDesc: this.editableProduct.shortDesc,
        longDesc: this.editableProduct.longDesc,
        imgFile: this.editableProduct.imgFile
      };
      const prodId = this.editableProduct.id;
      this.$store.dispatch("patchProduct", prodId, prodData);
    },
    removeProduct: async function() {
      confirm("Are you sure you want to delete this item?");
      const admin = this.$store.state.b.token;

      const response = await deleteProduct(
        DELETE_PRODUCT,
        this.editableProduct.id,
        admin
      );
      console.log(response);
      // this.itemVisibility = "deleted-item";
      // const prodId = this.editableProduct.id;
      //  this.$store.dispatch("patchProduct", prodId, prodData);
    },
  },
};
</script>

<style lang="scss" scoped>
#crud-component {
  display: flex;
  background-color: rgb(248, 231, 237);
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 80px;
  padding: 20px;
}
.crud-details {
  display: flex;
  flex-direction: column;
  width: 33%;
}
.crud-image,
.crud-description {
  background-color: rgb(180, 173, 162);
  width: 33%;
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
