<template>
  <div>
    <p>v-text</p>
    <div v-text="name"></div>
  </div>
</template>

<script>
export default {
  name: "Example2",
  data() {
    return {
      name: "Sairam",
    };
  },
};
</script>

<style scoped>
</style>