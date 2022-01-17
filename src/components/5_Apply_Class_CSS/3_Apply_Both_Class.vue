<template>
  <div>
    <div>
      <p class="changeColor" v-bind:class="classname">
        Apply two class property -> class="changeColor" v-bind:class="classname"
      </p>
      <p>
        Note: Using this example we applied two class property -> Right click
        inspect element
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Both-Css",
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
.changeColor {
  color: blueviolet;
}
</style>