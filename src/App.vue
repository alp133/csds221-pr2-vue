<template>
  <div id="app"></div>
  <todo-app> <AddPopup /> </todo-app>
</template>

<script>
import TodoApp from './components/TodoApp.vue';
import AddPopup from './components/AddPopup';

export default {
  name: 'App',
  components: {
    TodoApp,
    AddPopup,
  },
};
</script>
