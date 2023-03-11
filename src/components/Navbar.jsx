import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.container}>
            <h1 className={styles.logo}>Logo</h1>
            <div className={styles.secDiv}>
                <div>S</div> {/* for the search icon */}
                <div>M</div> {/* for the menu icon */}
            </div>
        </nav>
    );
}