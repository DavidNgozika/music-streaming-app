
import { Component } from 'react';
import styles from './App.module.css';

export default class App extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.header}>Notebook</h1>
            </div>
        );
    }
}

// export default function App() {
//     return (
//         <div className={styles.container}>
//             <h1 className={styles.header}>Notebook</h1>
//         </div>
//     );
// }


