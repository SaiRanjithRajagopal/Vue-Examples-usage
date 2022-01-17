<template>
  <div>
    <p>v-html="name"</p>
    <VHtml />
  </div>
</template>

<script>
import VHtml from "../components/3_V_Html/Example3.vue";

export default {
  name: "Router-VHtml",
  components: { VHtml },
};
</script>

<style scoped>
</style>