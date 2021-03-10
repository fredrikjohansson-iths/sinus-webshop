<template>
  <div class="container">
    <form @submit="postUser">
      <label for="name">Name</label>
      <input
        id="name"
        type="text"
        v-model="user.name"
        placeholder="e.g. Tonya Hawk"
        class="col-75"
        required
      />

      <label for="email">Email</label>
      <input
        id="email"
        type="text"
        v-model="user.email"
        placeholder="e.g. example@email.com"
        required
      />

      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        v-model="user.password"
        placeholder="*******"
        required
      />
      <label for="street">Street</label>
      <input
        id="street"
        type="text"
        v-model="user.address.street"
        placeholder="e.g. Thrasher Avenue 10"
        required
      />
      <label for="zip">Zip</label>
      <input
        id="zip"
        type="numbers"
        v-model="user.address.zip"
        placeholder="e.g. 123 45"
        required
      />
      <label for="city">City</label>
      <input
        id="city"
        type="text"
        v-model="user.address.city"
        placeholder="e.g. Dogtown"
        required
      />

      <input type="submit" value="Sign me up" />
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      user: {
        name: "",
        password: "",
        email: "",
        address: {
          street: "",
          zip: "",
          city: "",
        },
      },
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
          city: this.user.address.city,
        },
      };
      // const payload = this.user.data
      this.$store.dispatch("postUser", payload);
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

body {
  box-sizing: border-box;
}
.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  width: 60%;
  min-height: 480px;
  padding: 60px;
}

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
  width: 60%;
}

input[type="password"],
select,
textarea {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 60%;
}

input[type="numbers"],
select,
textarea {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 60%;
}
input[type="submit"] {
  height: 48px;
  border-radius: 50px;
  background-color: #000;
  color: white;
  cursor: pointer;
  outline: 0;
  border: 0;
  margin-top: 60px;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
</style>
