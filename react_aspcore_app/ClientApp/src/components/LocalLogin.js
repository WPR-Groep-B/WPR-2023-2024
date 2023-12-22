import styles from '../styles/Login.module.css';
import { Link } from 'react-router-dom';

function login() {
    return (
        <div>
            <h1>Login</h1>
            <form className={styles.form}>
                <hr />
                <label className={styles.label} htmlFor="email">
                    Email:
                </label>
                <input
                    className={styles.input}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="text@email.com"
                    required
                />
                <label className={styles.label} htmlFor="password">
                    Password:
                </label>
                <input
                    className={styles.input}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Wachtwoord"
                    required
                />
                <hr />
                <button className={styles.button} type="submit">
                    Login
                </button>
            </form>
            <div className={styles.linkcontainer}>
            <Link to="/register">
                Geen account? Maak er hier een aan
            </Link>
            </div>
        </div>
    );
}

export default login;