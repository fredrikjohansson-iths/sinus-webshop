<template>
  <div>
    <section class="single-order">
      <ul>
        <li
          class="test"
          v-for="order in orders"
          :key="order._id"
          @click="showDetails"
        >
          <span :id="order._id"
            >{{ order._id }}
            {{ order.orderValue }}
            <OrderListItem
              v-show="show === order._id"
              v-for="(item, index) in order.items"
              :key="index"
              :item="item"
          /></span>
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
  data() {
    return {
      activeClass: false,
      show: ""
    };
  },
  computed: {
    orders() {
      return this.$store.state.a.order;
    }
  },
  methods: {
    showDetails(event) {
      this.show = event.target.id
    }
  },
  components: {
    OrderListItem
  }
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
