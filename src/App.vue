<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/databind">DataBind</router-link> |
    <router-link to="/vtext">V-Text</router-link> |
    <router-link to="/vhtml">V-Html</router-link> |
    <router-link to="/vbind">V-Bind</router-link> |
    <router-link to="/applycss">Apply Css</router-link> |
    <router-link to="/bindstyle">Bind Style</router-link> |
    <router-link to="/shorthandsyntax">ShortHand Syntax</router-link> |
    <router-link to="/conditionalrendering">Conditional Rendering</router-link>
    | <router-link to="/vfor">V For</router-link> |
    <router-link to="/methods">Methods</router-link> |
    <router-link to="/formhandle">Form Handle</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
