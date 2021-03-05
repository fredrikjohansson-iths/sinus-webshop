<template>
  <div>
    <section class="single-order" @click="activeClass = !activeClass">
      <p>{{ order._id }}</p>
      <p>Items: {{ getAmountOfItems }}</p>
      <p>${{ order.orderValue }}</p>
      <section v-if="activeClass">
        <p v-for="item in order.items" :key="item._id">
          {{ item.title }} x {{ item.amount }}
        </p>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
    },
  },
  data() {
    return {
      activeClass: false,
    };
  },
  computed: {
    getAmountOfItems() {
      let sum = 0;
      this.order.items.forEach((element) => {
        sum += element.amount;
      });
      return sum;
    },
  },
};
</script>

<style lang="scss" scoped>
.single-order {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 60%;
}
</style>
