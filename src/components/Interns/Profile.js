
import styles from './Profile.module.css';

export default function Profile() {
    return (
        <div className={styles.container}>
            <h1>Profile</h1>
            <img 
                src={img}
                alt={profile}
                width="100px"
                height="100px"
            />
            <p className={styles.nameTag}>Jane Doe</p>
            <div className={styles.categories}>
                <div>Rank</div>
                <div>Path</div>
                <div>Stats</div>
            </div>
        </div>
    );
}
