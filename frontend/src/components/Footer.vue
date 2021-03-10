<template>
  <div class="footer">
    <div class="left-pane">
      <img class="sinus-logo" alt="Sinus logo" src="../assets/sinus-logo.svg" />
    </div>

    <div class="middle-pane">
      <!-- <ul>
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
            class="social-media-logo-twitter"
          /> 
        </li>
      </ul> -->
    </div>

    <div class="right-pane">
      <ul>
        <li>
          <router-link to="Customer-service">Customer Service</router-link>
        </li>
        <li>
          <router-link to="About-us">About Us</router-link>
        </li>
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

<style lang="scss" scoped>
.footer {
  position: bottom;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(185, 180, 180);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //   margin-top: 70px;
}

.sinus-logo {
  width: 25%;
  display: table;
  margin: 0 auto;
  float: left;
  padding-left: 0.5rem;
}

.social-media-logo {
  justify-self: flex-start;
  justify-content: space-between;
  width: 9.5%;
}

.social-media-logo-twitter {
  width: 10%;
}

.footer li {
  display: inline;
  list-style-type: none;
  padding-right: 20px;
  cursor: pointer;
}

.left-pane {
  width: 70%;
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
  width: 30%;
  height: 100%;
  position: relative;
  float: right;
  border-collapse: collapse;
  padding: 1rem;
}

.right-pane li a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.right-pane li a:hover {
  color: #ffffff;
}

.logo-holder {
  background-color: rgb(185, 180, 180);
}
</style>
