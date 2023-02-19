
import styles from './App.module.css';
import Interns from './components/Interns/Interns';
import Navbar from './components/Navbar/Navbar';
// import Profile from './pages/Profile';
// import { BrowserRouter, Route } from 'react-router-dom';

export default function App() {
    return (
        <>
            <div className={styles.container}>
                <Navbar />
                <Interns />
                {/* <BrowserRouter>
                    <Route path='/profile'>
                        <Profile />
                    </Route>
                </BrowserRouter> */}
            </div>
        </>
    );
}
