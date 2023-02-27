
import DeleteButton from '../Button/DeleteButton';
import styles from './NoteItem.module.css';

export default function NoteItem({
    title, details,
}) {
    return (
        <li className={styles.container}>
            <h3>{title}</h3>
            <p className={styles.detail}>{details}</p>
            <div className={styles.btnContainer}>
                <DeleteButton />
            </div>
        </li>
    );
}


