
import { useState } from 'react';
import NoteItems from "./components/NoteItems/NoteItems";
import styles from './App.module.css';
import { noteData } from './Data';
import FormModal from './components/Modal/FormModal';

export default function App() {
    const [note, setNote] = useState(noteData);

    const addNoteHandler = (title, details) => {
        console.log('Title', title);
    }

    return (
        <div className={styles.container}>
            <NoteItems 
                note={note}
            />
            
            <FormModal 
                onAddNoteHandler={addNoteHandler}
            />
        </div>
    );
}

