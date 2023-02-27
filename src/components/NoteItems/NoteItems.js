
import NoteItem from '../NoteItem/NoteItem';
import styles from './NoteItems.module.css';

export default function NoteItems({note}) {
    return (
        <ul className={styles.container}>
            {note.map(item => (
                <NoteItem 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    details={item.details}
                />
            ))}
        </ul>
    );
}
