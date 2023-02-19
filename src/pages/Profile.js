
// import mI from '../Assets/images/Male.png';
import fI from '../components/Assets/images/Female.png';
import styles from './Profile.module.css';

export default function Profile() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Profile</h1>
            <img 
                src={fI}
                alt={'profile'}
                width="100px"
                height="100px"
            />
            <p className={styles.nameTag}>Jane Doe</p>
            <div className={styles.categories}>
                <button>Rank</button>
                <button>Path</button>
                <button>Stats</button>
            </div>
        </div>
    );
}
