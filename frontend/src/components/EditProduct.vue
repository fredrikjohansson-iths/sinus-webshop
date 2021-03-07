<template>
  <section class="crud-form">
    <section class="crud-image">
      <img src="" alt="" />
    </section>
    <section class="crud-details">
      <p>{{ clickedProduct.title }}</p>
      <label for="title">Product Name</label>
      <input type="text" id="title" />
      <label for="price">Price</label>
      <input type="number" id="price" />
      <label for="category">Category</label>
      <input type="text" id="category" />
      <label for="short">Short description</label>
      <input type="text" id="short" />
      <label for="id">Serial Number</label>
      <input type="text" id="id" disabled />
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
    clickedProduct() {
      return this.$store.state.productModal;
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.crud-form {
  display: flex;
  flex-direction: column;
}
</style>
