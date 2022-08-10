<template>
  <div class="container pt-5" id="app">
    <div class="card">
      <h1>To do app</h1>
      <div class="form-control">
        <input
          type="text"
          v-model="$store.state.inputValue"
          @keyup.enter="$store.commit('addNotes', $store.state.inputValue)"
          maxlength="70"
        />
      </div>
      <button class="btn primary" @click="$store.commit('addNotes', $store.state.inputValue)">Add</button>
      <div class="left">
        <button class="btn danger" v-if="$store.state.notes.length > 4"  @click="$store.commit('deletaAllNotes', $store.state.notes)">Delete all</button>
      </div>
      <hr />
       <ul class="list" v-if="$store.state.notes.length !== 0">
        <h3 class="list-item" v-for="(note, idx) in $store.state.notes">
          <span class="todo-text">
          {{ idx + 1 }} - {{ note }}
          </span>
          <div>
           <button class="btn done-btn" @click="$store.commit('doneNote', $event)">
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
