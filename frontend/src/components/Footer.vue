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
            class="social-media-logo-twitter"
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
        <li><router-link to="AdminCrud">Admin</router-link></li>
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
