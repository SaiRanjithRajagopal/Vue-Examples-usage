<template>
  <div>
    <p>v-bind:id="cssId"</p>
    <VBind />
  </div>
</template>

<script>
import VBind from "../components/4_V_Bind_Id/1_Id_Property.vue";

export default {
  name: "Router-VBind",
  components: { VBind },
};
</script>

<style scoped>
</style>