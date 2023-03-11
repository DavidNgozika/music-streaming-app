import styles from './Navbar.module.css';
import img from '../images/search.png';
// import menu from '../images/menu.png';
import menu2 from '../images/menu2.png';
import menu2 from '../images/menu2.png';

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
                        src={menu2} 
                        alt="menu" 
                        width="30px"
                        height="30px"
                    />
                </div> 
            </div>
        </nav>
    );
}
