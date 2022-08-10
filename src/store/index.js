import { createStore } from "vuex";

export default createStore({
  state: {
    notes: [],
    inputValue: ''
  },
  getters: {},
  mutations: {
    addNotes(state, note){
     if(state.inputValue.trim() !== ''){
        state.notes.push(note)
        state.inputValue = ''
     } 
      else
        alert('Enter something for note!')
    },

    deleteNote(state, id){
       state.notes.splice(id, 1)
    }
  },
  actions: {},
  modules: {},
});
