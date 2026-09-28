const todoInput = document.querySelector("#todoInput")
const addBtn = document.querySelector("#addBtn")
const todoList = document.querySelector("#todoList")
const counter = document.querySelector("#counter")
const completedCounter = document.querySelector("#completedCounter")

let todos = JSON.parse(localStorage.getItem("todos")) || []

let todoCount = todos.length
let completedCount = 0


function createTodo(todoText) {

    const newtodo = document.createElement("div")
    newtodo.textContent = `Task: ${todoText} `

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"

    deleteBtn.addEventListener("click", () => {

        newtodo.remove()

        todos = todos.filter(todo => todo !== todoText)

        localStorage.setItem("todos", JSON.stringify(todos))

        todoCount--
        counter.textContent = `Total: ${todoCount}`
    })


    const completeBtn = document.createElement("button")
    completeBtn.textContent = "Completed"

    completeBtn.addEventListener("click", () => {

        newtodo.classList.toggle("completed")

        if (newtodo.classList.contains("completed")) {
            completedCount++
        } else {
            completedCount--
        }

        completedCounter.textContent = `Completed: ${completedCount}`
    })


    newtodo.appendChild(deleteBtn)
    newtodo.appendChild(completeBtn)

    todoList.appendChild(newtodo)
}




addBtn.addEventListener("click", () => {

    if (todoInput.value.trim() === "") return

    const newTodo = todoInput.value

    todos.push(newTodo)

    localStorage.setItem("todos", JSON.stringify(todos))

    createTodo(newTodo)

    todoCount++

    counter.textContent = `Total: ${todoCount}`

    todoInput.value = ""
})




todos.forEach(todo => {
    createTodo(todo)
})

counter.textContent = `Total: ${todoCount}`
