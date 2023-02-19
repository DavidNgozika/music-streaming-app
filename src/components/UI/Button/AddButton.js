
import styles from './AddButton.module.css';

export default function AddButton(props) {
    return (
        <button 
            type={props.type} 
            className={styles.button}
            onClick={props.onClick}
        >
            {props.children}           
        </button>
    );
}
