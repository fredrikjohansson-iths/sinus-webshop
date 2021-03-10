<template>
  <div>
    <section class="single-order">
      <ul>
        <li
          title="Click to expand"
          v-for="order in orders"
          :key="order._id"
          @click="showDetails"
        >
          <span class="point" :id="order._id"
            >Order Id: {{ order._id }} Total: {{ order.orderValue }} SEK
            <OrderListItem
              class="item"
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

.item {
  background-color: black;
  color: white;
  font-weight: 600;
  text-align: center;
}

.single-order {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
li {
  transition: scale 0.3s ease-in-out;
  list-style: none;
  margin-top: 10px;
  font-weight: 400;
}

li:hover {
  scale: 1.1;
}
</style>
