
import styles from './App.module.css';
import Interns from './components/Interns/Interns';
import Navbar from './components/Navbar/Navbar';

export default function App() {
    return (
        <div className={styles.container}>
            <Navbar />
            <Interns />
        </div>
    );
}
