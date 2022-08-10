<template>
  <div class="container pt-5" id="app">
    <div class="card">
      <h1>To do app</h1>
      <div class="form-control">
        <input
          type="text"
        />
      </div>
      <button class="btn primary">Add</button>
      <h3 class="left">
        Things to do: 10 ta
      </h3>
      <hr />
      <ListItem  v-if="notes.length !== 0"/>
      <!-- <h2 >
        Hozircha eslatmalar yo'q. Birinchisini qo'shing !
      </h2> -->
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
