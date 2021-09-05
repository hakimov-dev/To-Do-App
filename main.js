const App = {
    data() {
        return {
            title: "Eslatmalar ro'yxati",
            placeholderString: 'Eslatma sarlavhasini kiriting',
            inputValue:"",
           notes:[]
        }
    },
   
    
    methods:{
        inputChangeHandler(event){
            // console.log('inputChangeHandler', event.target.value);
            this.inputValue = event.target.value
        },

        AddNewNote(){
            if(this.inputValue !== ""){
                this.notes.push(this.inputValue)
                this.inputValue = '' 
            }
        },

        removeNote(event){
            this.notes.splice(event, 1)
        },

        upperCase(item){
             return item.toUpperCase()
        }
    }
}


const app = Vue.createApp(App)
app.mount('#app')


// const btnAll = document.querySelector('.all')
// const listItem = document.querySelectorAll('.list-item')

// btnAll.addEventListener('click', function(){
//     listItem.forEach(elem => {
//          elem.style.display = 'none'
//     });
// })