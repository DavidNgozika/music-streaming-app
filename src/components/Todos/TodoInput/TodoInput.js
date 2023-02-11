import { useState } from "react";
import styles from './TodoInput.module.css';

export default function TodoInput(props) {
    const [value, setValue] = useState('');

    const todoChangeHandler = e => {
        setValue(e.target.value);
    };

    const formSubmitHandler = e => {
        e.preventDefault();
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={styles.form-control}>
                <label>Todos</label>
                <input type={'text'} onChange={todoChangeHandler} />
            </div>
            <AddButton type="submit">Add Todo</AddButton>
        </form>
    );
}

