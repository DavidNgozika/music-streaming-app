
import styles from './Intern.module.css';

export default function Intern({
    fullName,
    profile,
    path,
}) {
    return (
        <li className={styles.container}>
            <span>{fullName}</span>
            <img src={profile} alt="profile" width={"50px"} height={"50px"} />
            <span>{path}</span>
            <button>Full Profile</button>
        </li>
    );
}

