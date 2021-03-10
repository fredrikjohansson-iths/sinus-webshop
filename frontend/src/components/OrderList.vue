<template>
  <div>
    <section class="single-order">
      <ul>
        <li v-for="order in orders" :key="order._id" @click="showDetails">
          <span>{{ order._id }}</span>
          ,
          <span>{{ order.orderValue }}</span>
          <OrderListItem
            v-show="activeClass"
            v-for="(item, index) in order.items"
            :key="index"
            :item="item"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import OrderListItem from "@/components/OrderListItem.vue";
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
    orders() {
      return this.$store.state.a.order;
    },
  },
  methods: {
    showDetails() {
      this.activeClass = !this.activeClass;
    },
  },
  components: {
    OrderListItem,
  },
};
</script>

<style lang="scss" scoped>
.single-order {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
li {
  list-style: none;
}
</style>
