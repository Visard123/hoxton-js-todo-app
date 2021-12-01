
const addTodoForm = document.querySelector(".add-item")
const todoList = document.querySelector(".todo-list")
const completedList = document.querySelector(".completed-list")

const state = {
    todos: [
        {
        title: "Buy milk",
        completed: false
    },
    {
        title: "Learn JS",
        completed: true
    },
    {
        title: "Sleep well",
        completed: false
    }
],  
        showCompleted: true
}



const showCompletedCheckbox = document.querySelector('.show-completed-checkbox')
showCompletedCheckbox.addEventListener('click', function(){
    state.showCompleted = showCompletedCheckbox.checked
    render()
})





function getCompletedTodos() {
    return state.todos.filter(function(todo) {
            return todo.completed
})
}

function getUncompletedTodos () {
    return state.todos.filter(function(todo) {
            return !todo.completed
})
}


function toggleTodo (todo) {
    todo.completed = !todo.completed
}

function addTodo (todo) {
    state.todos.push(todo)
}

function deleteTodo (text) {    
    state.todos = state.todos.filter(function(todo){  
        return todo.title !== text
    })
}

function editTodo (todo){
    const newTitle = prompt(`Insert new title`)
    todo.title = newTitle
    render()
}


function renderCompletedTodos(){

    const completedTodos = getCompletedTodos()
    completedList.innerHTML = ""

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

        const editBtn = liEl.querySelector(".edit")
        editBtn.addEventListener("click", function(){
            editTodo (todo)
            render()
        })

        const deleteBtn = liEl.querySelector('.delete')
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

        completedList.append(liEl)
    }
}
function renderUncompletedTodos(){
 
    const uncompletedTodos = getUncompletedTodos()
    todoList.innerHTML = ""

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
