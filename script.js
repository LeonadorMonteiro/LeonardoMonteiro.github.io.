// 1️⃣ Seleccionar los elementos del HTML
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.querySelector(".todo-list");

// 2️⃣ Escuchar el evento de enviar (cuando agregás tarea)
form.addEventListener("submit", function(event) {
  event.preventDefault(); // evita que se recargue la página

  const taskText = input.value.trim(); // lo que escribiste
  if (taskText === "") return; // si está vacío, no hace nada

  // 3️⃣ Crear los elementos para la tarea
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.classList.add("complete-btn");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.classList.add("delete-btn");

  // Agregar todo dentro del <li>
  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  // Limpiar input
  input.value = "";

  // 4️⃣ Evento para completar la tarea
  completeBtn.addEventListener("click", function() {
    li.classList.toggle("completed"); // activa/desactiva la clase
  });

  // 5️⃣ Evento para eliminar la tarea
  deleteBtn.addEventListener("click", function() {
    li.remove();
  });
});
