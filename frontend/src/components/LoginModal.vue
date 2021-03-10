<template>
  <div id="login-modal">
    <i
      title="Close"
      id="closeLogin"
      class="pointer fas fa-times"
      @click="exitLogin"
    ></i>
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
        <input
          :type="password"
          id="paEditsword"
          v-model="userPassword"
          required
        />
      </section>
      <transition name="fade">
        <i
          title="Click to show password"
          id="eye1"
          @click="showPassword"
          class="pointer fas fa-eye-slash"
          v-show="!show"
        ></i
      ></transition>
      <transition name="fade">
        <i
          title="Click to hide password"
          id="eye2"
          @click="showPassword"
          class="pointer fas fa-eye"
          v-show="show"
        ></i>
      </transition>
      <input id="loginB" type="submit" value="Login" />
    </form>
    <section class="login-footer">
      <router-link to="/register" title="Click to register!">
        <a @click="exitLogin">Not registered?</a>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "password",
      userMail: "",
      userPassword: "",
      show: false,
    };
  },
  computed: {
    userSession() {
      return this.$store.state.a.session.active;
    },
  },
  methods: {
    authenticate() {
      var credentials = {
        email: this.userMail,
        password: this.userPassword,
      };
      this.$store.dispatch("auth", credentials);
    },
    redirect() {
      this.$router.push("Register");
    },

    showPassword() {
      if (this.password === "password") {
        this.password = "text";
        this.show = true;
      } else if (this.password === "text") {
        this.password = "password";
        this.show = false;
      }
    },

    exitLogin() {
      this.$emit("closeLogin");
    },
  },
};
</script>

<style lang="scss" scoped>
#login-modal {
  position: absolute;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 16px;
  text-align: center;
  width: 260px;
  border-radius: 2%;
  z-index: 2;
}
input {
  margin-top: 5px;
  margin-bottom: 5px;
}
#eye1,
#eye2 {
  position: absolute;
  top: 40.5%;
}

.fa-eye {
  left: 88.5%;
}
.fa-eye-slash {
  left: 88.5%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
  opacity: 0;
}
.pointer {
  cursor: pointer;
}

#closeLogin {
  float: right;
  transition: color 0.3s ease-in-out;
}
#closeLogin:hover {
  color: rgb(231, 66, 66);
}

#loginB {
  width: 80px;
  height: 30px;
  border-radius: 20px;
  background-color: #2c3e50;
  color: white;
}

.login-footer {
  text-align: center;
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
