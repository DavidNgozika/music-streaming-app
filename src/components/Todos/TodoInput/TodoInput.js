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
        props.onAddTodo(value);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={styles.formControl}>
                <label>Todos</label>
                <input type="text" onChange={todoChangeHandler} />
            </div>
            <AddButton type="submit">Add Todo</AddButton>
        </form>
    );
}

