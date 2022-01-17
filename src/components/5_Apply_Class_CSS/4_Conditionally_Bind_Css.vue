<template>
  <div>
    <p>Conditionally Bind Css -> v-bind:class="isPromoted && 'fontStyle'"</p>
    <h2 v-bind:class="isPromoted && 'fontStyle'">Display Name Sairam</h2>
  </div>
</template>

<script>
export default {
  name: "conditionally-bind-css",
  data() {
    return {
      isPromoted: true,
    };
  },
};
</script>

<style scoped>
.fontStyle {
  font-style: italic;
  font-weight: bold;
  font-size: 30px;
}
</style>