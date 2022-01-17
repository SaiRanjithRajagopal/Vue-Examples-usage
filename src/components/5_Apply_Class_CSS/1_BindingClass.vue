<template>
  <div>
    <h2 class="underline">class="underline"</h2>
    <h2 v-bind:class="status">v-bind:class="status"</h2>
    <h2 class="underline" v-bind:class="status">
      class="underline" v-bind:class="status"
    </h2>
    <h2 v-bind:class="isPromoted && 'promoted'">
      v-bind:class="isPromoted && 'promoted'"
    </h2>
    <h2 v-bind:class="isSoldOut ? 'sold-out' : 'new'">
      v-bind:class="isSoldOut ? 'sold-out' : 'new'"
    </h2>
    <h2 v-bind:class="['new', 'promoted']">
      v-bind:class="['new', 'promoted']"
    </h2>
    <h2
      v-bind:class="[isPromoted && 'promoted', isSoldOut ? 'sold-out' : 'new']"
    >
      v-bind:class="[isPromoted && 'promoted', isSoldOut ? 'sold-out' : 'new']"
    </h2>
    <h2
      v-bind:class="{
        promoted: isPromoted,
        new: !isSoldOut,
        'sold-out': isSoldOut,
      }"
    >
      v-bind:class="{ promoted: isPromoted, new: !isSoldOut, 'sold-out':
      isSoldOut, }"
    </h2>
  </div>
</template>

<script>
export default {
  name: "BindingClass",
  data() {
    return {
      status: "danger",
      isPromoted: false,
      isSoldOut: true,
      highlightColor: "orange",
    };
  },
};
</script>

<style scoped>
.underline {
  text-decoration: underline;
}
.promoted {
  font-style: italic;
}
.new {
  color: olivedrab;
}
.sold-out {
  color: red;
}
</style>