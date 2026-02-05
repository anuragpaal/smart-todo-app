import { useEffect, useState } from "react";

function App() {
  const [task, setTask] = useState("");

  // Load from localStorage on start
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage when todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div className="container">
      <h1>Smart Todo App</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter Task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button style={{ margin: 10 }} onClick={addTodo}>
          Add Todo
        </button>
      </div>

      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <span
            onClick={() => toggleComplete(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
              marginRight: 10,
            }}
          >
            {todo.text}
          </span>
          <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
