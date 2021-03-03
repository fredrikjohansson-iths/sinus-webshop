<template>
  <div>
    <form>
      <label for="name">Name <input id="name" type="text" placeholder="e.g. Tonya Hawk" /> </label>
      <label for="email"
        >Email
        <input id="email" type="text" placeholder="e.g. example@email.com" />
      </label>
      <label for="password">Password <inputval /></label>
      <label for="street"
        >Street
        <input id="street" type="text" placeholder="e.g. Thrasher Avenue 10"
      /></label>
      <label for="zip"
        >Zip <input id="zip" type="numbers" placeholder="e.g. 123 45"
      /></label>
      <label for="city"
        >City <input id="city" type="text" placeholder="e.g. Dogtown"
      /></label>
      <button type="button" @click="submit">Sign me up!</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      user: {
        email: "",
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
      const data = this.$data.user;
      this.$emit("submitted", data);
    }
  }
};
</script>

<style>
</style>
