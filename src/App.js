
import { useState } from "react";
import TodoInput from "./components/Todos/TodoInput/TodoInput";
import TodoList from "./components/Todos/TodoList/TodoList";
import styles from './App.module.css';

export default function App() {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = enteredTask => {
        setTodos(prevTodos => {
            const updatedTodos = [...prevTodos];
            updatedTodos.unshift({
                id: Math.random().toString(),
                todos: enteredTask,
            });
            return updatedTodos;
        });
    };

    const removeTodoHandler = todoId => {
        setTodos(prevTodos => {
            const updatedTodos = prevTodos.filter(todo => todo.id !== todoId);
            return updatedTodos;
        });
    };

    let displayedContent = (
        <p style={{ textAlign: "center", color: 'white' }}>Todo list empty</p>
    );

    if (todos.length > 0) {
        displayedContent = (
            <TodoList 
                todos={todos} onDeleteTodo={removeTodoHandler}
            />
        );
    }

    return (
        <div>
            <h2 style={{ 
                textAlign: 'center', 
                color: 'white',
                marginBottom: '0'
            }}>
                MY TODO LIST APP
            </h2>
            <section className={styles.todoForm}>
                <TodoInput onAddTodo={addTodoHandler} />
            </section>

            <section className={styles.todos}>
                {displayedContent}
            </section>
        </div>
    );
}