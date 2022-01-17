<template>
  <div>
    <h2
      :style="{
        color: highlightColor,
        fontSize: headerSize + 'px',
        padding: '20px',
      }"
    >
      :style="{ color: highlightColor, fontSize: headerSize + 'px', padding:
      '20px', }"
    </h2>
  </div>
</template>

<script>
export default {
  name: "ShortHandSyntax",
  data() {
    return {
      headerSize: 50,
      highlightColor: "orange",
    };
  },
};
</script>

<style scoped>
</style>