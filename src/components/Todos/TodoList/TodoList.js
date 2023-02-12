
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export default function TodoList(props) {
    return (
        <ul className={styles.todoList}>
            {props.todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    onDelete={props.onDeleteTodo}
                >
                    {todo.todos}
                </TodoItem>
            ))}
        </ul>
    );
}