<template>
  <div>
    <h1 class="changeColor">Sairam -> class="changeColor"</h1>
    <hr />
    <DynamicCss />
    <hr />
    <ApplyBothClass />
    <hr />
    <ConditionallyBind />
  </div>
</template>

<script>
import DynamicCss from "./2_Dynamically_Bind_Css.vue";
import ApplyBothClass from "./3_Apply_Both_Class.vue";
import ConditionallyBind from "./4_Conditionally_Bind_Css.vue";

export default {
  name: "Class-Css",
  components: {
    DynamicCss,
    ApplyBothClass,
    ConditionallyBind,
  },
};
</script>

<style scoped>
.changeColor {
  color: red;
}
</style>