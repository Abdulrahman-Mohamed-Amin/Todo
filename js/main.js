
// start todo 

let todo = document.querySelector("#todo")
let todoForm = document.querySelector(".todo form")
let todoResult = document.querySelector(".todo .res_cont")


if(localStorage.getItem("todo-arr")){
    var todoArr = JSON.parse(localStorage.getItem("todo-arr"))
    todoArr.forEach(to =>{
        createTodo(to)
    })
}else{
    
    var todoArr = [] 
}

todoForm.addEventListener("submit" , (e) =>{
    e.preventDefault()
    
    todoArr.push(todo.value)
    localStorage.setItem("todo-arr" , JSON.stringify(todoArr))
    createTodo(todo.value)
    todo.value = ""
})

function createTodo (value){
    if(value !== ""){
        todoResult.innerHTML += `
        <div class="res">${value}</div>
        `
    }
    
    let todores = document.querySelectorAll(".todo .res")
    
    todores.forEach((to , idx) =>{

        to.addEventListener("click" , (e) => e.target.classList.toggle("finish"))

        to.addEventListener("contextmenu" ,(e) =>deleteTodo(e))
    })
}


function deleteTodo(e) {
    e.preventDefault()
    e.target.remove()
            
     let todoNow = document.querySelectorAll(".todo .res")
            
    console.log(Array.from(todoNow))
            
    todoArr.splice(Array.from(todoNow).indexOf(e.target) , 1) 
    localStorage.setItem("todo-arr" , JSON.stringify(todoArr))
}
