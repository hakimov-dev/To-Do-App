import { createStore } from "vuex";
import cookies from 'vue-cookies';

cookies.config('365d')

export default createStore({
  state: {
    notes: [],
    inputValue: ''
  },
  getters: {},
  mutations: {
    addNotes(state, note){
     if(state.inputValue.trim() !== ''){
        state.notes.push({note: note, isDone: false})
        state.inputValue = ''
     } 
      else
        alert('Enter something for note!')
    },

    deleteNote(state, id){
       state.notes.splice(id, 1)
    },

    doneNote(state, id){
      state.notes[id].isDone = true
    },

    deletaAllNotes(state, event){
     const userConfirm = confirm('You sure want delete all notes?')
      if(userConfirm == true)
        state.notes.splice(event, 1111111)
    },

    getNotes(state){
      if(cookies.get('user_all_notes') !== undefined)
          state.notes = JSON.parse(cookies.get('user_all_notes'))
    }
  },
  actions: {},
  modules: {},
});
