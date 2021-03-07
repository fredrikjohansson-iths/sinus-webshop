<template>
  <div class="container">
    <transition name="fade">
      <div id="alert" class="alert" v-if="show">
        <span class="closebtn"></span>
        Saved successfully!
      </div></transition
    >
    <form>
      <input
        id="name"
        type="text"
        v-model="patchUser.name"
        :disabled="inputState"
        :placeholder="user.name"
      />
      <input
        id="email"
        type="text"
        v-model="patchUser.email"
        :disabled="inputState"
        :placeholder="user.email"
      />

      <input
        v-if="user.address"
        id="street"
        type="text"
        :disabled="inputState"
        v-model="patchUser.address.street"
        :placeholder="user.address.street"
      />

      <input
        v-if="user.address"
        id="zip"
        type="numbers"
        v-model="patchUser.address.zip"
        :placeholder="user.address.zip"
        :disabled="inputState"
      />
      <input
        v-if="user.address"
        id="city"
        type="text"
        v-model="patchUser.address.city"
        :placeholder="user.address.city"
        :disabled="inputState"
      />
    </form>
    <button id="edit" @click="toggleEdit();mirrorData();" v-if="!enableEdit">Edit</button
    ><button
      @click="
        saveUser();
        toggleEdit();
      "
      v-if="enableEdit"
    >
      Save</button
    ><button @click="toggleEdit" v-if="enableEdit">Cancel</button
    >
  </div>
</template>
<script>
export default {
  name: "ProfileForm",
  data() {
    return {
      enableEdit: false,
      inputState: "disabled",
      show: false,
      patchUser: {
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
  props: {
    user: Object
  },
  watch: {
    enableEdit(oldVal, newVal) {
      if (newVal === true && oldVal === false) {
        this.inputState = "disabled";
      } else {
        this.inputState = null;
      }
    }
  },
  methods: {
    hideAlert() {
      this.show = false;
    },
    saveUser() {
      this.$store.dispatch("patchUser", this.patchUser)
      this.show = true;
      setTimeout(() => (this.show = false), 3000);
    },
    toggleEdit() {
      if (this.enableEdit === true) {
        this.enableEdit = false;
      } else {
        this.enableEdit = true;
      }
    },
    mirrorData() {
      this.patchUser = this.user;
      this.patchUser.address = this.user.address;
      console.log(this.user);
    }
  }
};
</script>

<style scoped>
#edit {
  margin-top: 25px;
  margin-left: 100%;
  margin-right: 100%;
}

.container {
  width: 500px;
  clear: both;
}

.container input {
  width: 100%;
  clear: both;
  margin-top: 25px;
  margin-left: 100%;
  margin-right: 100%;
}

.alert {
  padding: 20px;
  background-color: lightgreen; /* Green */
  color: white;
  margin-bottom: 15px;
}
/* The close button */
.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
}

.fade-enter,
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
