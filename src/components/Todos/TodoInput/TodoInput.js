import { useState } from "react";
import styles from './TodoInput.module.css';
import AddButton from '../../UI/Button/AddButton';

export default function TodoInput(props) {
    const [value, setValue] = useState('');

    const todoChangeHandler = e => {
        setValue(e.target.value);
    };

    const formSubmitHandler = e => {
        e.preventDefault();
        if (value.trim().length === 0) {
            return;
        }
        props.onAddTodo(value);
    };

    return (
        <form onSubmit={formSubmitHandler} className={styles.form}>
            <div className={styles.formControl}>
                <label>Start typing to add Todos:</label>
                <input type="text" onChange={todoChangeHandler} />
            </div>
            <AddButton type="submit">Add Todo</AddButton>
        </form>
    );
}

