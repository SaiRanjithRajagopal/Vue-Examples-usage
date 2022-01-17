<template>
  <div>
    <p v-bind:class="classname">
      Dynamically Bind Css -> v-bind:class="classname"
    </p>
    <p>Note: Using this example we can change the class name at run time</p>
  </div>
</template>

<script>
export default {
  name: "Dynamic-Css",
  data() {
    return {
      classname: "changeFont",
    };
  },
};
</script>

<style scoped>
.changeFont {
  font-size: 25px;
}
</style>