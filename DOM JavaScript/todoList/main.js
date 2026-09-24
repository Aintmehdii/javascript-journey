const todoInput = document.querySelector("#todoInput")
const addBtn = document.querySelector("#addBtn")
const todoList = document.querySelector("#todoList")
const counter = document.querySelector("#counter")
const completedCounter = document.querySelector("#completedCounter")

let todoCount = 0
let todocompletedCounter = 0
addBtn.addEventListener("click", ()=>{
    if (todoInput.value.trim() === "") return
    const newtodo = document.createElement("div")
    newtodo.textContent = `Task: ${todoInput.value} `
    todoCount ++
    counter.textContent = `Total: ${todoCount}`

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", ()=>{
        newtodo.remove()
        todoCount --
        counter.textContent = `Total: ${todoCount}`

        if (newtodo.classList.contains("completed")) {
            todocompletedCounter--
            completedCounter.textContent = `Completed: ${todocompletedCounter}`
        }
    })
    
    
    const completeBtn = document.createElement("button")
    completeBtn.textContent = "Completed"
    completeBtn.addEventListener("click", ()=>{
        newtodo.classList.toggle("completed")
        
        if (newtodo.classList.contains("completed")) {
            todocompletedCounter ++
            completedCounter.textContent = `Completed: ${todocompletedCounter}`
        }else {
            todocompletedCounter --
            completedCounter.textContent = `Completed: ${todocompletedCounter}`
        }
    })

    
    
    newtodo.appendChild(deleteBtn)
    newtodo.appendChild(completeBtn)
    todoList.appendChild(newtodo)
    todoInput.value = ""
})
