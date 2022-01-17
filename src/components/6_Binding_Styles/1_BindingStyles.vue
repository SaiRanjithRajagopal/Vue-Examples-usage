<template>
  <div>
    <h2
      v-bind:style="{
        color: highlightColor,
        fontSize: headerSize + 'px',
        padding: '20px',
      }"
    >
      Inline Style > v-bind:style="{ color: highlightColor, fontSize: headerSize
      + 'px', padding: '20px', }"
    </h2>
    <h2 v-bind:style="headerStyleObject">v-bind:style="headerStyleObject"</h2>
    <div v-bind:style="[baseStyleObject, successStyleObject]">
      v-bind:style="[baseStyleObject, successStyleObject]"
    </div>
    <div v-bind:style="[baseStyleObject, dangerStyleObject]">
      v-bind:style="[baseStyleObject, dangerStyleObject]"
    </div>
  </div>
</template>

<script>
export default {
  name: "BindingStyle",
  data() {
    return {
      highlightColor: "orange",
      headerSize: 50,
      headerStyleObject: {
        color: "orange",
        fontSize: "50px",
        padding: "20px",
      },
      baseStyleObject: {
        fontSize: "50px",
        padding: "10px",
      },
      successStyleObject: {
        color: "green",
        backgroundColor: "lightgreen",
        border: "1px solid green",
      },
      dangerStyleObject: {
        color: "darkred",
        backgroundColor: "red",
        border: "1px solid darkred",
      },
    };
  },
};
</script>

<style scoped>
</style>