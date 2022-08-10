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
      <ul class="list">
        <h3 class="list-item" v-for="(note, idx) in 3">
          {{ idx + 1 }} - Hello world
          <button class="btn danger">
            Delete
          </button>
        </h3>
      </ul>
      <!-- <h2 v-if="notes.length === 0">
        Hozircha eslatmalar yo'q. Birinchisini qo'shing !
      </h2> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style></style>
