import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerItem}>
                <h3>Company</h3>
                <p>About</p>
                <p>Jobs</p>
                <p>For the Record</p>
            </div>

            <div className={styles.footerItem}>
                <h3>Communities</h3>
                <p>For Artists</p>
                <p>Developers</p>
                <p>Advertising</p>
                <p>Investors</p>
                <p>Vendors</p>
            </div>

            <div className={styles.footerItem}>
                <h3>Useful links</h3>
                <p>Support</p>
                <p>Free Mobile App</p>
            </div>

            <div className={styles.footerItem}>
                <div>Instagram</div>
                <div>Twitter</div>
                <div>Facebook</div>
            </div>

            <div className={styles.footerItem}>
                <span>Legal</span>
                <span>Privacy Center</span>
                <span>Privacy Policy</span>
                <span>Cookies</span>
                <span>About Ads</span>
                <span>&copy; 2023 Spotify AB</span>

                <div>
                    <button className={styles.footerbtn}>
                        English
                    </button>
                </div>
            </div>
        </footer>
    );
}