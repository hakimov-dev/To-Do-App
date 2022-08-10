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
    },

    doneNote(state, event){
      event.path[2].classList.add('done')
      event.target.classList.add('hidden')
    },

    deletaAllNotes(state, event){
     const userConfirm = confirm('You sure want delete all notes?')
      if(userConfirm == true)
        state.notes.splice(event, 1111111)
    }
  },
  actions: {},
  modules: {},
});
