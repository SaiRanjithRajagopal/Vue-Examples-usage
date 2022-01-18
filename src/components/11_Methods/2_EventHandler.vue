<template>
  <div>
    <p>{{ randomValue }}</p>
    <button
      type="button"
      v-on:click="randomValue = Math.random()"
      text="incrementCounter"
    >
      randomValue
    </button>
    <br />
    <p>{{ counter }}</p>
    <p>v-on:click="incrementCounter"</p>
    <button type="button" v-on:click="incrementCounter" text="incrementCounter">
      incrementCounter
    </button>
    <span style="margin-left: 10px"></span>
    <button
      type="button"
      v-on:click="incrementCounterby5($event)"
      text="incrementCounter"
    >
      incrementCounterby5
    </button>
    <span style="margin-left: 10px"></span>
    <button @click="decrementCounter">DecrementCounter</button>
    <span style="margin-left: 10px"></span>
    <button type="button" @click="decrementCounterby5" text="incrementCounter">
      decrementCounterby5
    </button>
  </div>
</template>

<script>
export default {
  name: "EventHandler",
  data() {
    return {
      counter: 0,
      randomValue: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.counter = this.counter + 1;
    },
    incrementCounterby5(event) {
      console.log("Event", event);
      this.counter = this.counter + 5;
    },
    decrementCounter() {
      this.counter = this.counter - 1;
    },
    decrementCounterby5(event) {
      //By default event is trigerred
      console.log("Event", event);
      this.counter = this.counter - 5;
    },
  },
};
</script>

<style scoped>
</style>