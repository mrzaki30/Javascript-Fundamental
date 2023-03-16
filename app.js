const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input")
const filterInput = document.querySelector("#filter-input")
const todoList = document.querySelector("#todo-list")
const clearButton = document.querySelector("#clear-todos")

todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);
clearButton.addEventListener("click", clearTodo)
filterInput.addEventListener("keyup", filterTodo)


function addTodo(e) {
    e.preventDefault();
    // create element li
    const li = document.createElement("li");
    // create class li
    li.className = "todo-item list-group-item d-flex justify-content-between align-items-center"
    li.setAttribute("style", "background-color: #423a6f;color:#F8F9FA;")
    //create isi dari li
    li.appendChild(document.createTextNode(todoInput.value))
    //create element a
    const a = document.createElement("a")
    a.href = "#"
    a.className = "btn btn-sm btn-danger delete-todo"
    a.innerHTML = "Delete"
    if (todoInput.value) {
        //memasukkan element a kedalaman li
        li.appendChild(a)
        //memasukkan li kedalam todo list
        todoList.appendChild(li);
        todoInput.value = ""
        // console.log(li);
    } else {
        alert("Harap masukkan input terlebih dahulu");
    }
}

function deleteTodo(e) {
    e.preventDefault();
    if (e.target.classList.contains("delete-todo")) {
        if (confirm("apakah anda yakin ingin menghapus ini")) {
            const parent = e.target.parentElement;
            parent.remove();
        }
    }
}

function clearTodo(e) {
    e.preventDefault();
    todoList.innerHTML = "";
}

function filterTodo(e) {
    const filterText = e.target.value.toLowerCase();
    const todoItems = document.querySelectorAll(".todo-item")
    todoItems.forEach((item) => {
        const todoText = item.firstChild.textContent.toLowerCase();
        if (todoText.indexOf(filterText) !== -1) {
            item.setAttribute("style", "display:block;");
        } else {
            item.setAttribute("style", "display:none !important;")
        }
        console.log(todoText)
    })
}
