<template>
  <div id="crud-component">
    <section class="mode-header">
      <section id="create" class="tab" @click="changeActiveClass">
        Create
      </section>
      <section id="edit" class="tab" @click="changeActiveClass">
        Edit
      </section>
    </section>
    <AdminEditForm v-if="activeClass === 'edit'" />
    <AdminCreateForm v-if="activeClass === 'create'" />
  </div>
</template>

<script>
// import { PATCH_PRODUCT, patchProduct } from "@/api/patch.js";
import AdminEditForm from "@/components/AdminEditForm.vue";
import AdminCreateForm from "@/components/AdminCreateForm.vue";
export default {
  components: {
    AdminEditForm,
    AdminCreateForm,
  },
  data() {
    return {
      activeClass: "create",
    };
  },
  methods: {
    changeActiveClass() {
      if (this.activeClass === "create") {
        this.activeClass = "edit";
      } else if (this.activeClass === "edit") {
        this.activeClass = "create";
      }
      this.$emit("change", this.activeClass);
    },
  },
};
</script>

<style lang="scss" scoped>
#crud-component {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}
section {
  padding-bottom: 0;
}

.mode-header {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  cursor: pointer;

  .tab {
    height: 40px;
    width: 80px;
  }
  #create {
    background-color: khaki;
  }
  #edit {
    background-color: rosybrown;
    margin: 0px;
  }
}
</style>
