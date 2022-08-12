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
      <button
        class="btn primary"
        @click="$store.commit('addNotes', $store.state.inputValue)"
      >
        Add
      </button>
      <div class="left">
        <transition>
          <button
            class="btn danger"
            v-if="$store.state.notes.length > 4"
            @click="$store.commit('deletaAllNotes', $store.state.notes)"
          >
            Delete all
          </button>
        </transition>
      </div>
      <hr />
      <transition>
        <ul class="list" v-if="$store.state.notes.length !== 0">
          <h3
            :class="note.isDone ? 'done' : ''"
            class="list-item"
            v-for="(note, idx) in $store.state.notes"
          >
            <span class="todo-text"> {{ idx + 1 }} - {{ note.note }} </span>
            <div>
              <transition>
                <button
                  v-if="!note.isDone"
                  class="btn done-btn"
                  @click="$store.commit('doneNote', idx)"
                >
                  Done
                </button>
              </transition>
              <button
                class="btn danger"
                @click="$store.commit('deleteNote', idx)"
              >
                Delete
              </button>
            </div>
          </h3>
        </ul>
        <h2 v-else>At the moment notes none. Add first!</h2>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
window.SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition
let soundRecord = new window.SpeechRecognition();

window.addEventListener("keyup", (event) => {
  if (event.key == 'l')
    soundRecord.stop()
})

window.addEventListener("keydown", (event) => {
  if (event.key == 'l' && !event.repeat) {
      soundRecord.lang = 'en-US';
      soundRecord.interimResults = false;
      soundRecord.start();
      soundRecord.continuous = false;

      soundRecord.onresult = (evt) => {
        console.log(evt)
        const t = Array.from(evt.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        store.state.inputValue = t
  }}
})

</script>

<style></style>
