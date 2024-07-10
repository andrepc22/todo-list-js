let todos = [];

function agregarTodo() {
  const todo = document.getElementById("todo").value;
  todos.push(todo);
  document.getElementById("todo").value = "";
  displayTodos();
}

function displayTodos() {
  const todoList = document.getElementById("lista");
  const todosli = todos.map(
    (x) => `<input type="checkbox"/><li>${x}</li><button>X</button>`
  );
  todoList.innerHTML = todosli.join("");
  // eliminar todos
  const elementos = document.querySelectorAll("#lista button");
  elementos.forEach((e, i) => {
    e.addEventListener("click", () => {
      todos.splice(i, 1);
      displayTodos();
    });
  });
  console.log(todos);
}
