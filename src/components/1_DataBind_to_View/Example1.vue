<template>
  <div>
    <p>combineText : {{ combineText }}</p>
    <p>concatString Function : {{ concatString() }}</p>
  </div>
</template>

<script>
export default {
  name: "Example_1",
  data() {
    return {
      greeting: "Hello",
      name: "Ranji",
      message: "Greeting message from sairam",
      combineText: "",
    };
  },
  methods: {
    concatString: function () {
      this.combineText = this.greeting.concat(
        " ",
        this.name,
        " ",
        this.message
      );
      return this.greeting.concat(" ", this.name, " ", this.message);
    },
  },
};
</script>

<style scoped>
</style>