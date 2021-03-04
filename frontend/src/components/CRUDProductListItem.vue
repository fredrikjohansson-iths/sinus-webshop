<template>
  <div @click="openEditor" class="list-item">
    <section class="buttons"></section>
    <h3 class="title">{{ product.title }}</h3>
    <span class="id">{{ product._id }}</span>
    <span class="category">{{ product.category }}</span>
  </div>
</template>

<script>
export default {
  methods: {
    openEditor() {
      const editProd = {
        title: this.product.title,
        price: this.product.price,
        category: this.product.category,
        shortDesc: this.product.shortDesc,
        longDesc: this.product.longDesc,
        imgFile: this.product.imgFile,
        id: this.product._id,
      };
      this.$store.commit("setEditableProduct", editProd);
    },
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
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 20% repeat(3, 20%) 20%;
  text-align: left;
}
#deleted-item {
  border: red 2px solid;
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
