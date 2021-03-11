<template>
  <div id="product-holder">
    <ProductsItemHolder
      @viewProduct="showModal"
      v-for="product in products"
      :key="product._id"
      :product="product"
      class="product"
      :editMode="editMode"
    />
  </div>
</template>

<script>
import ProductsItemHolder from "@/components/ProductsItemHolder.vue";

export default {
  props: {  
    editMode: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showModal() {
      this.$emit("showModal");
    }
  },
  components: {
    ProductsItemHolder
  },
  computed: {
    products() {
      return this.$store.state.allProducts;
    }
  }
};
</script>

<style lang="scss" scoped>
#product-holder {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 60px;
  gap: 60px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
</style>
