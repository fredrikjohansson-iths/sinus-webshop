<template>
  <div id="product-view">
    <h1>Gear up! Start here.</h1>
    <ProductsContainer @showModal="toggleModal" /><transition name="fade">
    <ProductDescription @hideModal="toggleModal" v-show="showModal" /></transition>
  </div>
</template>

<script>
import ProductsContainer from "@/components/ProductsContainer.vue";
import ProductDescription from "@/components/ProductDescription.vue";


export default {

  computed: {
    modalStatus() {
      return this.$store.state.productModalStatus;
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  methods: {
    toggleModal() {
      if (!this.showModal) {
        this.showModal = true;
      } else {
        this.showModal = false;
      }
      console.log(this.showModal)
    }
  },
  components: {
    ProductsContainer,
    ProductDescription
  }
};
</script>

<style scoped>

.fade-enter,
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#product-view {
  width: 100vw;
  background-color: rgb(243, 239, 239);
  padding-top: 60px;
}
h1 {
  margin-left: 120px;
}
</style>
