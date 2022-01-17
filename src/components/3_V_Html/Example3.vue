<template>
  <div v-html="name"></div>
</template>
//This is security risk
<script>
export default {
  name: "Example3",
  data() {
    return { name: "<b>Sairam</b>" };
  },
};
</script>

<style scoped>
</style>