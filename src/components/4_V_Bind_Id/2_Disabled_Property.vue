<template>
  <div>
    <button v-bind:disabled="disableButton">Button click</button>
  </div>
</template>

<script>
export default {
  name: "Example4_2",
  data() {
    return {
      disableButton: true,
    };
  },
};
</script>

<style scoped>
</style>