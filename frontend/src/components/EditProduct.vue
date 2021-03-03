<template>
  <div id="crud-component">
    <section class="crud-image">
      <img src="" alt="" />
    </section>
    <section class="crud-details">
      <label for="title">Product Name</label>
      <input type="text" id="title" />
      <label for="short">Short description</label>
      <input type="text" id="short" />
      <label for="price">Price</label>
      <input type="text" id="price" />
      <label for="id">Serial Number</label>
      <input type="text" id="id" />
    </section>
    <section class="crud-description">
      <p></p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#crud-component {
  display: flex;
  background-color: rgb(248, 231, 237);
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  height: 300px;
  gap: 40px;
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
</style>
