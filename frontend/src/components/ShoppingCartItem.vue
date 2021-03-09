<template>
  <section id="shopping-cart-item">
    <section class="title-buttons">
      <h5>{{ item.title }} , {{ item.category }}</h5>
      <p>${{ item.price }}</p>
      <section class="buttons">
        <i
          class="fas fa-minus-square"
          @click="decrement"
          title="Decrease amount"
        ></i>
        <span>Quantity: {{ getProductAmount }}</span>
        <i
          class="fas fa-plus-square"
          @click="increment"
          title="Increase amount"
        ></i>
        <i
          class="fas fa-trash"
          @click="eraseProduct"
          title="Remove this item"
        ></i>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    getProductAmount() {
      return this.$store.getters.getAmountOfProduct(this.item._id);
    },
  },
  methods: {
    eraseProduct() {
      this.$store.dispatch("removeProductFromCart", this.item._id);
    },
    increment() {
      this.$store.dispatch("addProductToCart", this.item);
    },
    decrement() {
      this.$store.dispatch("removeOneItem", this.item);
    },
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
  },
};
</script>

<style lang="scss" scoped>
#shopping-cart-item {
  margin-bottom: 24px;
  display: flex;
  border-bottom: 1px gray solid;
}
.title-buttons {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    margin: 0px 10px 0px 10px;
  }
}
.fa-trash {
  margin-right: 60px;
}
.cartButton {
  width: 20px;
  height: 20px;
}
h5 {
  margin-block-start: 0;
  margin-block-end: 0;
}
</style>
