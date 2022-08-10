<template>
  <div class="container pt-5" id="app">
    <div class="card">
      <h1>To do app</h1>
      <div class="form-control">
        <input
          type="text"
          v-model="$store.state.inputValue"
        />
      </div>
      <button class="btn primary">Add</button>
      <h3 class="left">
        There are {{ $store.state.notes.length }} tasks to uncomplete
      </h3>
      <hr />
      <ListItem  v-if="$store.state.notes.length !== 0"/>
      <h2 v-else>
        At the moment notes none. Add first!
      </h2>
    </div>
  </div>
</template>

<script>
import ListItem from './components/listItem.vue';
export default {
  name: "App",
  component: {
    ListItem
  }
};
</script>

<style></style>
