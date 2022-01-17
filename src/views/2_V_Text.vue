<template>
  <div class="home">
    <p>v-text="name"</p>
    <VText />
  </div>
</template>

<script>
import VText from "../components/2_V_Text/Example2.vue";

export default {
  name: "Router-VText",
  components: { VText },
};
</script>
