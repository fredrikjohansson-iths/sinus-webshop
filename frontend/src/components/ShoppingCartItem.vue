<template>
  <section id="shopping-cart-item">
    <section class="image">
      <img :src="getImgUrl(item.imgFile)" height="60px" />
    </section>
    <section class="information">
      <h5>{{ item.title }}</h5>
      <section class="buttons">
        <button @click="decrement" class="cartButton"> - </button>
        <span>{{ getProductAmount }}</span>
        <button @click="increment" class="cartButton"> + </button>
        <button @click="eraseProduct">Radera</button>
      </section>
  
    </section>
  </section>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    getProductAmount() {
      return this.$store.getters.getAmountOfProduct(this.item._id);
    }
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
    }
  }
};
</script>

<style lang="scss" scoped>

#shopping-cart-item {
  margin-bottom: 24px;
  display: flex;
}
button {
 
  width: 80px;
  height: 30px;
  border-radius: 20px;
  background-color: #2c3e50;
  color: white;

}
 
 .cartButton{
    width: 20px;
    height: 20px;
  }

.information {
  display: flex;
  flex-direction: column;
}


</style>
