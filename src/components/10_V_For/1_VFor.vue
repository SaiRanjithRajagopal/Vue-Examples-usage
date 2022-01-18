<template>
  <div>
    <p>names: ['Bruce', 'Clark', 'Diana']</p>
    <p>v-for="(name, index) in names" :key="name"</p>
    <p v-html="value"></p>
    <h2 v-for="(name, index) in names" :key="name">{{ index }} {{ name }}</h2>

    <hr />
    <p>
      fullNames: [ { first: "Bruce", last: "Wayne" }, { first: "Clark", last:
      "Kent" }, { first: "Princess", last: "Diana" }, ]
    </p>
    <p>v-for="name in fullNames" :key="name.first"</p>
    <p v-html="value1"></p>
    <h2 v-for="name in fullNames" :key="name.first">
      {{ name.first }} {{ name.last }}
    </h2>

    <hr />
    <p>
      actors: [ { name: "Christian Bale", movies: ["Batman", "American Psycho"],
      }, { name: "Di Caprio", movies: ["Titanic", "Inception"], }, ]
    </p>
    <div v-for="actor in actors" :key="actor.name">
      <h2>{{ actor.name }}</h2>
      <h3 v-for="movie in actor.movies" :key="movie">{{ movie }}</h3>
    </div>

    <hr />
    <p>myInfo: { name: "Ranjith", channel: "SaiChannel", course: "Vue 3", },</p>
    <h2 v-for="(value, key, index) in myInfo" :key="value">
      {{ index }} {{ key }} {{ value }}
    </h2>

    <hr />
    <p>names: ['Bruce', 'Clark', 'Diana']</p>
    <template v-for="name in names" :key="name">
      <h2>{{ name }}</h2>
      <hr />
    </template>
    <template v-for="name in names" :key="name">
      <h2 v-if="name === 'Bruce'">{{ name }}</h2>
    </template>
  </div>
</template>

<script>
export default {
  name: "VforDirective",
  data() {
    return {
      value: "Output - <b>{{ index }} {{ name }}</b>",
      value1: "Output - <b>{{ name.first }} {{ name.last }}</b>",
      names: ["Bruce", "Clark", "Diana"],
      fullNames: [
        { first: "Bruce", last: "Wayne" },
        { first: "Clark", last: "Kent" },
        { first: "Princess", last: "Diana" },
      ],
      actors: [
        {
          name: "Christian Bale",
          movies: ["Batman", "American Psycho"],
        },
        {
          name: "Di Caprio",
          movies: ["Titanic", "Inception"],
        },
      ],
      myInfo: {
        name: "Ranjith",
        channel: "SaiChannel",
        course: "Vue 3",
      },
    };
  },
};
</script>

<style scoped>
</style>