<template>
  <div class="container">
    <form>
      <label for="name"
        >Name <input id="name" type="text" v-model="form.name" placeholder="e.g. Tonya Hawk" class="col-75" />
      </label>
      <label for="email"
        >Email
        <input id="email" type="text" v-model="form.email" placeholder="e.g. example@email.com" />
      </label>
      <label for="password"
        >Password <input id="password" type="password" v-model="form.password" placeholder="*******"
      /></label>
      <label for="street"
        >Street
        <input id="street" type="text" v-model="form.street" placeholder="e.g. Thrasher Avenue 10"
      /></label>
      <label for="zip"
        >Zip <input id="zip" type="numbers" v-model="form.zip" placeholder="e.g. 123 45"
      /></label>
      <label for="city"
        >City <input id="city" type="text" v-model="form.city" placeholder="e.g. Dogtown"
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
        email: " ",
        password: " ",
        name: " ",
        address: {
          street: " ",
          zip: " ",
          city: " "
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

body {
  box-sizing: border-box;
}
.container {
  background-color: #fff;
	border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
  margin-left: 500px;
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



input[type=text], select, textarea {
  

  background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}
input[type=password], select, textarea {

  background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

input[type=numbers], select, textarea {
 
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

input[type=submit] {

  color: rgb(185, 180, 180);
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
}


</style>
