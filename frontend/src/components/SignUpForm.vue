<template>
  <div>
    <form>
      <label for="name"
        >Name <input v-model="user.name" id="name" type="text"
      /></label>
      <label for="email"
        >Email <input id="email" type="text" v-model="user.email"
      /></label>
      <label for="password"
        >Password <input id="password" type="password" v-model="user.password"
      /></label>
      <label for="street"
        >Street <input id="street" type="text" v-model="user.address.street"
      /></label>
      <label for="zip"
        >Zip <input id="zip" type="numbers" v-model="user.address.zip"
      /></label>
      <label for="city"
        >City <input id="city" type="text" v-model="user.address.city"
      /></label>
      <button @click="submit" type="button">
        OK
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      user: {
        email: "",
        password: "",
        name: "",

        address: {
          street: "",
          zip: "",
          city: ""
        }
      }
    };
  },
  methods: {
    submit() {
      const data = this.$data.user
      this.$emit("submitted", data);
    }
  }
};
</script>

<style></style>
