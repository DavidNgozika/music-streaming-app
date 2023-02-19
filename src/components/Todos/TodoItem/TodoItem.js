
import DeleteButton from '../../UI/Button/DeleteButton';
import styles from './TodoItem.module.css';

export default function TodoItem(props) {
    const deleteHandler = () => {
        props.onDelete(props.id)
    };

    return (
        <li className={styles.todo}>
            {props.children}
            <DeleteButton onDelete={deleteHandler}></DeleteButton>
        </li>
    );
}
