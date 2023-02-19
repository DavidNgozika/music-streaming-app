
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.container}>
            <div className={styles.left}>
                <p>Rank</p>
                <p>Intern</p>
                <p className={styles.path}>Path</p>
            </div>

            <p>Full Profile</p>
        </nav>
    );
}
