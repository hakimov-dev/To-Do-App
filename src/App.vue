<template>
  <div class="container pt-5" id="app">
    <div class="card">
      <h1>To do app</h1>
      <div class="form-control">
        <input
          type="text"
          v-model="$store.state.inputValue"
          @keyup.enter="$store.commit('addNotes', $store.state.inputValue)"
        />
      </div>
      <button class="btn primary" @click="$store.commit('addNotes', $store.state.inputValue)">Add</button>
      <h3 class="left">
        There are {{ $store.state.notes.length }} tasks to uncomplete
      </h3>
      <hr />
       <ul class="list" v-if="$store.state.notes.length !== 0">
        <h3 class="list-item" v-for="(note, idx) in $store.state.notes">
          {{ idx + 1 }} - {{ note }}
          <div>
           <button class="btn" @click="$store.commit('doneNote', $event)">
             Done 
           </button>
           <button class="btn danger" @click="$store.commit('deleteNote', idx)">
             Delete
           </button>
          </div>
        </h3>
      </ul>
      <h2 v-else>
        At the moment notes none. Add first!
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
