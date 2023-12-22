import styles from '../styles/Login.module.css';

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
                <a href="http://appservicewprgroepb.azurewebsites.net/register">
                    Geen account? Maak er hier een aan
                </a>
            </div>
        </div>
    );
}

export default login;