<template>
  <div class="cartForm">
    <form>
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

      <label for="cardnumber"> Card Number</label>
      <input id="cardnumber" type="text" />

      <label for="cvv"> CVV</label>

      <input id="cvv" type="numbers" />

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
  width: 60%;
}
/*
.label {
  margin-bottom: 5px;
  display: block;
}
input {
  width: 50%;
  clear: both;
  margin-top: 25px;
 /* margin-left: 10%; */
  /* margin-right: 100%;  */
/* } */

/* select {
  margin-left: 10px;
  margin-right: 20px;
  border-radius: 2px;
  border-style: groove;
  height: 25px;
}  */
form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input[type="text"],
select,
textarea {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 50%;
}
input[type="password"],
select,
textarea {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 50%;
}

input[type="numbers"],
select,
textarea {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 50%;
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
  margin-bottom: 20px;
}
</style>
