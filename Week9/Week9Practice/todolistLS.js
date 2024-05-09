const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    todoItem.textContent = todo.text;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeTodoItem(index));

    todoItem.appendChild(removeButton);
    todoList.appendChild(todoItem);
  });
}

function removeTodoItem(index) {
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
}


addTodoButton.addEventListener('click', () => {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    todos.push({ text: todoText });
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
    todoInput.value = '';
  }
});

renderTodos();
