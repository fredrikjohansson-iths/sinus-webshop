<template>
  <div class="cartForm">
    <form>
      <label for=""></label>
      <label for="name"
        >Name <input id="name" type="text" v-model="billingInfo.name"
      /></label>
      <label for="email"
        >Email <input id="email" type="text" v-model="billingInfo.email"
      /></label>

      <label for="street"
        >Street
        <input id="street" type="text" v-model="billingInfo.address.street"
      /></label>

      <label for="zip"
        >Zip <input id="zip" type="numbers" v-model="billingInfo.address.zip"
      /></label>
      <label for="city"
        >City <input id="city" type="text" v-model="billingInfo.address.city"
      /></label>

      <div>
        <div class="label">
          <label> Card Number</label>
          <input id="cardnumber" type="text" />
        </div>
      </div>

      <div>
        <div class="label">
          <label> CVV</label>
        </div>
        <input id="cvv" type="numbers" />
      </div>
      <!-- <div class="label"> -->
      <label> Month</label>
      <!-- </div> -->
      <select>
        <option value="01">January</option>
        <option value="02">February </option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
      <!-- <div class="label"> -->
      <label> Year</label>
      <!-- </div> -->
      <select>
        <option value="16"> 2021</option>
        <option value="17"> 2022</option>
        <option value="18"> 2023</option>
        <option value="19"> 2024</option>
        <option value="20"> 2025</option>
        <option value="21"> 2026</option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      billingInfo: {
        email: "",
        name: "",
        address: {
          street: "",
          zip: "",
          city: "",
        },
      },
    };
  },
  props: {
    item: {
      type: Object,
    },
  },
  mounted() {
    if (this.$store.state.a.session.active) {
      this.billingInfo = this.$store.state.a.user;
      this.billingInfo.address = this.$store.state.a.user.address;
    }
  },
  methods: {},
};
</script>

<style scoped>
.cartForm {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.label {
  margin-bottom: 5px;
  
}
input {
  width: 50%;
  clear: both;
  margin-top: 25px;
 /* margin-left: 10%; */
  /* margin-right: 100%;  */
}
select {
  margin-left: 10px;
  margin-right: 20px;
  border-radius: 2px;
  border-style: groove;
  height: 25px;
}
</style>
