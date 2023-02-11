
import styles from './TodoItem.module.css';

export default function TodoItem(props) {
    const deleteHandler = () => {
        props.onDelete(props.id)
    };

    return (
        <li className={styles.todo} onClick={deleteHandler}>
            {props.children}
        </li>
    );
}
