const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoListEle = document.querySelector("#todo-list");
const deleteTodosEle = document.querySelector("#delete-todos");

const TODO_LIST = "todos";

let todoList = [];

/*
    function section
*/

function handleTodoListner(event) {
    if (deleteTodosEle.classList.contains(HIDDEN_CLASS))
        deleteTodosEle.classList.remove(HIDDEN_CLASS);
    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = "";
    const todoObject = makeTodoObject(todo);
    todoList.push(todoObject);
    saveTodoList();
    printTodo(todoObject);
}

function makeTodoObject(todo) {
    const date = new Date();
    const todoObject = {
        id: date.getTime(),
        text: todo,
    };
    return todoObject;
}

function saveTodoList() {
    localStorage.setItem(TODO_LIST, JSON.stringify(todoList));
}

function deleteTodoListner(event) {
    const li = event.target.parentElement;
    todoList = todoList.filter((todo) => todo.id !== Number(li.id));
    saveTodoList();
    li.remove();
}

function deleteAllListner(event) {
    event.preventDefault();
    deleteTodosEle.classList.add(HIDDEN_CLASS);
    todoList = [];
    localStorage.removeItem(TODO_LIST);
    const lis = todoListEle.children;
    for (var i = 0; i < lis.length; i) {
        lis[i].remove();
    }
    deleteTodosEle.classList.add(HIDDEN_CLASS);
}

function printTodo(todoObject) {
    const li = document.createElement("li");
    li.id = todoObject.id;
    const span = document.createElement("span");
    span.innerText = todoObject.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodoListner);
    li.appendChild(span);
    li.appendChild(button);
    todoListEle.appendChild(li);
}

/*
    execute section
*/

todoForm.addEventListener("submit", handleTodoListner);
deleteTodosEle.addEventListener("click", deleteAllListner);

const savedTodoList = localStorage.getItem(TODO_LIST);

if (savedTodoList) {
    deleteTodosEle.classList.remove(HIDDEN_CLASS);
    todoList = JSON.parse(savedTodoList);
    todoList.forEach((todoObject) => {
        printTodo(todoObject);
    });
}
