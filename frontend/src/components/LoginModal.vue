<template>
  <div id="login-modal"  @mouseout="exitLogin">
    <form @submit.prevent="authenticate">
      <section class="mail">
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          v-model="userMail"
          required
        />
      </section>
      <section class="password">
        <label for="password">Password</label>
        <input :type="password" id="password" v-model="userPassword" required />
        <input type="checkbox" @click="showPassword" /> Visa lösenord
      </section>
      <input type="submit" value="Login" />
    </form>
    <section class="login-footer">
      <router-link to="/register">
        <p @click="exitLogin">Not registered?</p>
      </router-link>
      <button @click="exitLogin">Cancel</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "password",
      userMail: "",
      userPassword: ""
    };
  },
  computed: {
    userSession() {
      return this.$store.state.a.session.active;
    }
  },
  methods: {
    authenticate() {
      var credentials = {
        email: this.userMail,
        password: this.userPassword
      };
      this.$store.dispatch("auth", credentials);
    },

    showPassword() {
      if (this.password === "password") {
        this.password = "text";
      } else if (this.password === "text") {
        this.password = "password";
      }
    },

    exitLogin() {
      this.$emit("closeLogin");
    }
  }
};
</script>

<style lang="scss" scoped>
#login-modal {
  position: relative;
  height: auto;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: animatetop;
  animation-duration: 0.4s;
  padding: 16px;
}

/* Add Animation */
@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    input {
      width: 100%;
    }
  }
}
</style>
