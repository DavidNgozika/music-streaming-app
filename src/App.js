
import { useState } from "react";

export default function App() {
    const [todos, setTodos] = useState([
        { id: 't1', todos: 'Learn React', },
        { id: 't2', todos: 'Master React', },
    ]);

    const addTodo = enteredTask => {
        setTodos(prevTodos => {
            const updatedTodos = [...prevTodos];
            updatedTodos.unshift({
                id: Math.random().toString(),
                todos: enteredTask,
            })
            return updatedTodos;
        });
    };

    const removeTodo = todoId => {
        setTodos(prevTodos => {
            const updatedTodos = prevTodos.filter(todo => todo.id !== todoId);
            return updatedTodos;
        });
    };

    let displayedContent = (
        <p style={{ textAlign: "center" }}>Todo list empty</p>
    );

    return (
        <div>
            <section>

            </section>
        </div>
    );
}