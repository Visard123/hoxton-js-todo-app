// Finding main elements of page

const addItemsbox=document.querySelector('.add-item')
const toDoItems=document.querySelector('.todo-list')
const CompletedItems=document.querySelector('.completed-list')


// Creating state 
state={
  todos:[
{
  title:  'Go shopping',
  completed: true

},
{
    title:  'Work out',
    completed: true 
},
{
    title:  'See the doctor',
    completed: true  
}
  ],
  showCompleted: true,
}


const showCompletedCheckbox = document.querySelector('.show-completed-checkbox')
showCompletedCheckbox.addEventListener('click', function(){
    state.showCompleted = showCompletedCheckbox.checked
    render()
})


// Creating function to make things work 
function showCompletedTodo(){
 return state.todos.filter(function(todo){
     return todo.completed
 })


}


function showIncompletedTodo(){
    return state.todos.filter(function(todo){
        return !todo.completed
    })
   
   
   }
   

function addNewTodo (todo){
    state.todos.push(todo)

}
 function toggleTodo(todo){
todo.completed =!todo.completed
 }
 function deleteTodo(text){
    return state.todos.filter(function(todo){
        return todo.title !==text
    })
 }

 function editTodo(todo,newTitle){
    const newTitle = prompt(`Insert item`)
     todo.tile=newTitle
 }

// Functions to render the page 

 function renderCompletedTodos(){

    const completedTodos = showCompletedTodo()
    CompletedItems.innerHTML = ""

    for (const todo of completedTodos){

        const liEl = document.createElement("li")
        liEl.setAttribute("class","todo completed")

        liEl.innerHTML = `
        <div class="completed-section">
            <input class="completed-checkbox" type="checkbox" />
        </div>
        
        <div class="text-section">
            <p class="text">${todo.title}</p>
        </div>
        <div class="button-section">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>  
        `

        const editButton = liEl.querySelector(".edit")
        editButton.addEventListener("click", function(){
            editTodo (todo)
            render()
        })

        const deleteButton = liEl.querySelector('.delete')
        deleteButton.addEventListener("click", function(){
                deleteTodo (todo.title)
                render()
        })


        const completedCheckbox = liEl.querySelector(".completed-checkbox")
        completedCheckbox.checked = todo.completed
        completedCheckbox.addEventListener("click", function(){
            toggleTodo(todo)
            render()
        })

        CompletedItems.append(liEl)
    }
}
function renderUncompletedTodos(){
 
    const uncompletedTodos = showIncompletedTodo()
    toDoItems.innerHTML = ""

    for (const todo of uncompletedTodos){

        const liEl = document.createElement("li")
        liEl.setAttribute("class","todo")

        liEl.innerHTML = `
            <div class="completed-section">
                <input class="completed-checkbox" type="checkbox" />
            </div>
                
            <div class="text-section">
                <p class="text">${todo.title}</p>
            </div>
            <div class="button-section">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div> 
            `

            const editBtn = liEl.querySelector(".edit")
            editBtn.addEventListener("click", function(){
                editTodo (todo)
                render()
            })

            const deleteBtn = liEl.querySelector('.delete')
                console.log(deleteBtn)
                deleteBtn.addEventListener("click", function(){
                deleteTodo (todo.title)
                render()
        })

            const completedCheckbox = liEl.querySelector(".completed-checkbox")
            completedCheckbox.checked = todo.completed
            completedCheckbox.addEventListener("click", function(){
                toggleTodo(todo)
                render()
            })

            todoList.append(liEl)
    }
}


function render(){
    console.log(state)
    renderCompletedTodos()
    renderUncompletedTodos()

    const checkboxCompletedSection = document.querySelector("section.completed-section")

    if(state.showCompleted){
        checkboxCompletedSection.style.display = 'block'
    }else {
        checkboxCompletedSection.style.display = 'none'
}

}
render()

function userInputTodo(){
    addTodoForm.addEventListener('submit', function (event) {
        event.preventDefault()
    

        const userAddTodos= document.querySelector('.text-input')


        const todo = {
            title: userAddTodos.value,
            condition: false
        }

        console.log(userAddTodos.value)
        console.log(todo)

        addTodo(todo)
        addTodoForm.reset()
        render()

    } )   
        
}
userInputTodo()
