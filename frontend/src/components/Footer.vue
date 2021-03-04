<template>
  <div class="footer">
    <!-- Logga -->
    <div class="left-pane">
      <img class="sinus-logo" alt="Sinus logo" src="../assets/sinus-logo.svg" />
    </div>

    <div class="middle-pane">
      <ul>
        <li>
          <img
            alt="Insta logo"
            src="../assets/insta.svg"
            class="social-media-logo"
          />
        </li>
        <li>
          <img
            alt="Facebook logo"
            src="../assets/facebook.svg"
            class="social-media-logo"
          />
        </li>
        <li>
          <img
            alt="Twitter logo"
            src="../assets/twitter.svg"
            class="social-media-logo"
          />
        </li>
      </ul>
    </div>

    <div class="right-pane">
      <ul>
        <li>
          <router-link to="Customer-service">Customer Service</router-link>
        </li>
        <li><router-link to="About-us">About Us</router-link></li>
        <li><router-link to="Admin">Admin</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.footer {
  position: bottom;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(185, 180, 180);
  height: 7rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.footer div {
  width: 100%;
}

.sinus-logo {
  width: 50%;
  display: table;
  margin: 0 auto;
}

.social-media-logo {
  justify-self: flex-start;
  justify-content: space-between;
  width: 15%;
}

li {
  display: inline;
  list-style-type: none;
  padding-right: 20px;
  margin-right: 20px;
}

.left-pane {
  width: 33%;
  height: 100%;
  float: left;
  border-collapse: collapse;
}
.middle-pane {
  width: 33%;
  height: 100%;
  float: left;
  border-collapse: collapse;
}
.right-pane {
  width: 33%;
  height: 100%;
  position: relative;
  float: right;
  border-collapse: collapse;
  padding: 1rem;
}

</style>