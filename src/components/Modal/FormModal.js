import styles from './FormModal.module.css';

export default function FormModal({
    onAddNoteHandler,
}) {


    return (
        <form 
            onSubmit={onAddNoteHandler} 
            className={styles.container}
        >
            <h3>Add a Note:</h3>
            <div className={styles.inputItem}>
                <label htmlFor="title">Title:</label>
                <input type='text' name="title" />
            </div>

            <div className={styles.inputItem}>
                <label htmlFor="details">Details:</label>
                <input type='text' name="details" />
            </div>
        </form>
    );
}

