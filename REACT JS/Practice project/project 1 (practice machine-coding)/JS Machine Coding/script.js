let todo = [];

function handleSubmit() {
  let text = document.getElementById("text1").value;

  if (todo.length < 0) {
  }

  todo.push({ id: todo.length < 1 ? 1 : todo.length + 1, value: text });
  renderTodos();
}
function renderTodos() {
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  todo.forEach((item) => {
    resultDiv.innerHTML += `
      <h2>
        ${item.value} 
        <button onclick="handleClick(${item.id})">Delete</button>
      </h2>
    `;
  });
}

function handleClick(itemId) {
  todo = todo.filter((e, i) => e.id !== itemId);
  renderTodos();
}
