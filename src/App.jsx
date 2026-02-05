import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
        id: Date.now(),
        text: task,
        completed: false
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
        todos.map(todo =>
            todo.id === id
            ? {...todo, completed : !todo.completed}
            : todo
        )
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Smart Todo App</h1>

      <input
        type="text"
        placeholder="Enter Task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button style={{margin : 10 }} onClick={addTodo}>Add</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <span onClick={() => toggleComplete(todo.id)}
            style={{
                textDecoration : todo.completed
                ? "line-through"
                : "none",
                cursor : "pointer",
                marginRight : 10
            }}
            >{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
