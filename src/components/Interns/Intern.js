
import Button from '../UI/Button';
import styles from './Intern.module.css';

export default function Intern({
    firstName,
    lastName,
    profile,
    path,
    id,
}) {
    return (
        <li className={styles.container}>
            <div className={styles.left}>
                <div>
                    <span>{id}</span>
                </div>

                <div>
                    <img 
                        src={profile} alt="profile" 
                        width={"50px"} height={"50px"} 
                    />
                </div>

                <div className={styles.fullName}>
                    <span>{firstName}</span>
                    <span>{lastName}</span>
                </div>

                <div className={styles.path}>
                    <span>{path}</span>
                </div>
            </div>

            <div>
                <Button />
            </div>
        </li>
    );
}

