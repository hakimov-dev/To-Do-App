import { createStore } from "vuex";

export default createStore({
  state: {
    notes: []
  },
  getters: {},
  mutations: {
    addNotes(state, note){
     state.notes.push(note)
    }
  },
  actions: {},
  modules: {},
});
