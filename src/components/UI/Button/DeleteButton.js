
import styles from './DeleteButton.module.css';

export default function DeleteButton(props) {
    return (
        <button 
            className={styles.button} 
            onClick={props.onDelete}
        >
            Delete Todo
        </button>
    );
}
