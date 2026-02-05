import { useState } from "react";

function App() {
    const [task,setTask] = useState("");
    const [todos,setTodos] = useState([]);

    const addTodo  = () => {
        if(task.trim() === "") return;

        setTodos([...todos,task]);
        setTask("")
    }

    return(
        <div style={{padding : 20 }}>
            <h1>Smart Todo App</h1>

            <input 
            type="text"
            placeholder="Enter Text.."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />

            <button style={{margin : 10}} onClick={addTodo }>Add</button>

            {todos.map((t,i) => (
                <p key={i}>{t}</p>
            ))}
        </div>
    )
}

export default App;