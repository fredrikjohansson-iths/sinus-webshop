<template>
  <div>
    <section class="single-order" @click="activeClass = !activeClass">
      <ul>
        <li v-for="order in orders" :key="order._id" @click="showDetails">
          {{ order._id }}
          ,
          {{ order.orderValue }}
          <section
            v-show="activeClass"
            v-for="(item, index) in order.items"
            :key="index"
          >
            {{ item.title }}
          </section>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch("getOrders");
  },
  // props: {
  //   order: {
  //     type: Object,
  //   },
  // },
  data() {
    return {
      activeClass: false,
    };
  },
  computed: {
    // getAmountOfItems() {
    //   let sum = 0;
    //   this.order.items.forEach((element) => {
    //     sum += element.amount;
    //   });
    //   return sum;
    // },
    // orderItems() {
    //   return this.order.items;
    // },
    orders() {
      return this.$store.state.a.order;
    },
  },
  methods: {
    showDetails() {},
  },
};
</script>

<style lang="scss" scoped>
.single-order {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60%;
}
</style>
