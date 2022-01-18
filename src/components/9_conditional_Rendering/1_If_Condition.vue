<template>
  <div>
    <h1 v-if="num === 0">The number is zero | v-if="num === 0"</h1>
    <h2 v-else-if="num < 0">The number is negative | v-else-if="num > 0"</h2>
    <h2 v-else-if="num > 0">
      The number is positive | v-else-if="num '&lt;' 0"
    </h2>
    <h2 v-else>Not a number | v-else</h2>
    <template v-if="showElement">
      <h2>Sairam</h2>
      <h2>Ranjith</h2>
      <h2>Vue 3</h2>
    </template>
    <h2 v-show="showElement">v-show="showElement"</h2>
  </div>
</template>

<script>
export default {
  name: "ConditionalRendering",
  data() {
    return {
      num: 1,
      showElement: true,
    };
  },
};
</script>

<style scoped>
</style>