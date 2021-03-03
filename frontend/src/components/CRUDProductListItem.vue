<template>
  <div :id="itemVisibility" class="list-item">
    <section class="buttons">
      <button @click="expand" class="more-details">expand</button>
      <!-- <input type="checkbox" @change="check($event)" /> -->
      <button @click="removeProduct">Delete</button>
    </section>
    <span class="title">{{ product.title }}</span>
    <span class="id">{{ product._id }}</span>
    <span class="category">{{ product.category }}</span>
    <button @click="openModal" class="display-product-btn">
      Display Modal
    </button>
    <section v-if="itemVisibility === 'expanded'">
      <p>{{}}</p>
    </section>
  </div>
</template>

<script>
import { DELETE_PRODUCT, deleteProduct } from "@/api/delete.js";

export default {
  data() {
    return {
      itemVisibility: "",
    };
  },
  methods: {
    expand() {
      if (this.itemVisibility === "") {
        this.itemVisibility = "expanded";
      } else if (this.itemVisibility === "expanded") {
        this.itemVisibility = "";
      }
    },
    openModal() {
      this.$store.dispatch("changeProductModal", this.product._id);
    },

    removeProduct: async function() {
      confirm("Are you sure you want to delete this item?");

      const response = await deleteProduct(DELETE_PRODUCT, this.product._id);
      console.log(response.data.message);
      this.itemVisibility = "deleted-item";
    },
    // check() {
    //   alert("hej");
    // },
  },
  components: {},
  props: {
    product: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 20% repeat(3, 20%) 20%;
  text-align: left;
}
#deleted-item {
  border: red 2px solid;
}
#expanded {
  height: 400px;
  grid-template-rows: repeat(auto-fill, 80px);
}
.buttons {
  grid-column: 1;
}
.title {
  grid-column: 2;
}
.id {
  grid-column: 3;
}
.category {
  grid-column: 4;
}
.display-product-btn {
  grid-column: 5;
}
button,
span {
  margin: 10px 20px 10px 0px;
}
</style>
