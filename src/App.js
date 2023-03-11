
import styles from './App.module.css';
import Carousel from './components/Carousel';
import Header from './components/Header';
// import Sidebar from './components/Sidebar';

export default function App() {
    return (
        <div className={styles.container}>
            {/* <Sidebar /> */}
            <Header />
            <Carousel />
        </div>
    ); 
}
