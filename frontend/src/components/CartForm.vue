<template>
  <div class="cartForm">
    <!-- <form> -->
    <section class="personal-details">
      <label for="name">Name</label>
      <input id="name" type="text" v-model="billingInfo.name" />
      <label for="email">Email</label>
      <input id="email" type="text" v-model="billingInfo.email" />

      <label for="street">Street</label>
      <input id="street" type="text" v-model="billingInfo.address.street" />

      <label for="zip">Zip</label>
      <input id="zip" type="numbers" v-model="billingInfo.address.zip" />
      <label for="city">City</label>
      <input id="city" type="text" v-model="billingInfo.address.city" />
    </section>

    <section class="payment-details">
      <label for="cardnumber"> Card Number</label>
      <input id="cardnumber" type="text" />

      <label for="cvv"> CVV</label>
      <input id="cvv" type="numbers" />
      <section class="date">
        <label for="month"> Month</label>
        <select id="month">
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

        <label for="year"> Year</label>
        <select id="year">
          <option value="16"> 2021</option>
          <option value="17"> 2022</option>
          <option value="18"> 2023</option>
          <option value="19"> 2024</option>
          <option value="20"> 2025</option>
          <option value="21"> 2026</option>
        </select>
      </section>
    </section>
    <!-- </form> -->
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
}
.personal-details,
.payment-details {
  display: flex;
  flex-direction: column;
}
.date {
  display: flex;
}

form {
  display: flex;
}

input[type="text"],
select,
textarea,
input[type="numbers"] {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 80%;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type="submit"] {
  color: rgb(185, 180, 180);
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
