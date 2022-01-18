<template>
  <div>
    <h2>{{ 2 + 3 + 5 }}</h2>
    <h2>{{ 5 + 10 + 15 }}</h2>
    <h2>Add method - {{ add(2, 3, 5) }}</h2>
    <h2>Add method - {{ add(5, 10, 15) }}</h2>
    <h2>Multiply method - {{ multiply(10) }}</h2>
    <h2>Multiply method - {{ multiply(baseValue) }}</h2>
    <hr />
    <EventHandler2 />
  </div>
</template>

<script>
import EventHandler2 from "../11_Methods/2_EventHandler.vue";

export default {
  name: "MethodsExample",
  components: {
    EventHandler2,
  },
  data() {
    return {
      baseValue: 30,
    };
  },
  methods: {
    add(a, b, c) {
      return a + b + c;
    },
    multiply(multiplier) {
      return 2 * multiplier;
    },
  },
};
</script>

<style scoped>
</style>