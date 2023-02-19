
import Intern from './Intern';
import styles from './Interns.module.css';
import { Data } from '../Assets/Data';

export default function Interns() {
    return (
        <ul className={styles.container}>
            {Data.map(item => (
                <Intern 
                    id={item.id}
                    key={item.id}
                    profile={item.img}
                    fullName={item.fullName}
                    path={item.path}
                />
            ))}
        </ul>
    );
}
