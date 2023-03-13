import styles from './Navbar.module.css';
import img from '../images/search.png';
import menu3 from '../images/menu3.jpeg';

export default function Navbar() {
    return (
        <nav className={styles.container}>
            <h1 className={styles.logo}>Bee Music</h1>
            <div className={styles.secDiv}>
                <div>
                    <img src={img} alt='search' />
                </div> 
                <div>
                    <img 
                        src={menu3} 
                        alt="menu" 
                        width="30px"
                        height="30px"
                    />
                </div> 
            </div>
        </nav>
    );
}
