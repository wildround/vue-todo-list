// Main app component
<template>
  <div class="container">
    <div class="header">
      <h1 class="heading">Todo list sample</h1>
    </div>
    <div class="main tile">
      <todo-list/>
    </div>
  </div>
</template>

<script>
import TodoList from "./components/todo-list/todo-list.vue";

export default {
  name: "App",
  components: {
    TodoList
  }
};
</script>

// global css style
<style>
@import url("./common/css/header.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: wheat;
  font-family: sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 5px;
}

.header {
  grid-column: 1 / 4;
}

.main {
  grid-column: 2 / 3;
}

.tile {
  padding: 5px;
}

.heading {
  background-color: #c8c8c8;
  text-indent: 5px;
  padding-left: 5px;
}

@media screen and (max-width: 800px) {
  .container {
    display: grid;
    grid-template-columns: 1fr;
  }
}

</style>