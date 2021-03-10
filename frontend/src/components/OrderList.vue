<template>
  <div>
    <section class="single-order">
      <ul>
        <li title="Click to expand" v-for="order in orders" :key="order._id" @click="showDetails">
         <span class="point" :id="order._id"
            >Order Id: {{ order._id }} Total: {{ order.orderValue }}SEK
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
      if (this.show !== event.target.id) {
        this.show = event.target.id;
      } else {
        this.show = "";
      }
    }
  },
  components: {
    OrderListItem
  }
};
</script>

<style lang="scss" scoped>
.point {
  cursor: pointer;
}

.single-order {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
li {
  list-style: none;
}
</style>
