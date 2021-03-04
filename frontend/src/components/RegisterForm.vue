<template>
  <div>
    <form>
      <label for="name"
        >Name <input id="name" type="text" placeholder="e.g. Tonya Hawk" />
      </label>
      <label for="email"
        >Email
        <input id="email" type="text" placeholder="e.g. example@email.com" />
      </label>
      <label for="password"
        >Password <input id="password" type="password" placeholder="*******"
      /></label>
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
      <button type="button" @click="postUser">Sign me up!</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      user: {
        email: "test@test.se",
        password: "test123",
        name: "test",
        address: {
          street: "testaddress 1",
          zip: "123456",
          city: "Test"
        }
      }
    };
  },
  methods: {
    postUser() {
      var payload = {
        email: this.user.email,
        password: this.user.password,
        name: this.user.name,
        address: {
          street: this.user.address.street,
          zip: this.user.address.zip,
          city: this.user.address.city
        }
      };
      // const payload = this.user.data
      this.$store.dispatch("postUser", payload)
    }
  }
};
</script>

<style></style>
