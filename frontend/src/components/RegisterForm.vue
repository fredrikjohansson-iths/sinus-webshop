<template>
  <div>
    <form>
      <label for="name"
        >Name <input id="name" type="text" :disabled="inputStateA"
      /></label>
      <label for="email"
        >Email <input id="email" type="text" :disabled="inputStateA"
      /></label>
      <label for="password">Password <inputval :disabled="inputStateA"/></label>
      <label for="street"
        >Street <input id="street" type="text" :disabled="inputStateB"
      /></label>
      <label for="zip"
        >Zip <input id="zip" type="numbers" :disabled="inputStateB"
      /></label>
      <label for="city"
        >City <input id="city" type="text" :disabled="inputStateB"
      /></label>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      inputStateA: "",
      inputStateB: ""
    };
  },
  props: { editAccount: Boolean, editBilling: Boolean, user: Object },
  watch: {
    editAccount(val) {
      if (val === true) {
        this.inputStateA = "disabled";
      } else if (val === false) {
        this.inputStateA = "";
      }
    }
  },
  methods: {
    test() {
      if (this.inputStateA === true) {
        this.inputStateA = false;
      } else {
        this.inputStateA = true;
      }
      console.log(this.inputState);
    },
    submit() {
      const data = this.$data.user;
      this.$emit("submitted", data);
    }
  }
};
</script>

<style></style>
