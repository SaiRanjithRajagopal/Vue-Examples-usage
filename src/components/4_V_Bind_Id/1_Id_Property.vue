<template>
  <div>
    <h1 v-bind:id="cssId">{{ headerName }}</h1>
    <hr />
    <Disabled />
  </div>
</template>
//Note v-bind:disabled -> id should be lowercase
//Inspect the element in HTML dom
<script>
import Disabled from "./2_Disabled_Property.vue";

export default {
  name: "Example4_1",
  components: {
    Disabled,
  },
  data() {
    return {
      headerName: "Sairam",
      cssId: "headerCSSId",
    };
  },
};
</script>

<style scoped>
</style>