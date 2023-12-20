import styles from '../styles/Login.module.css';

function Login() {
    return (
        <html>
    <body className={styles.body}>
        <div className={styles.container}>
        <h1>Login</h1>
        <form className={styles.form}>
            <hr></hr>
            <label className={styles.label} for="email">Email:</label>
            <input className={styles.input} type="email" id="email" name="email" placeholder="text@email.com" required></input>
            <label className={styles.label} for="password">Password:</label>
            <input className={styles.input} type="password" id="password" name="password" placeholder="Wachtwoord" required></input>
            <hr></hr>
            <button className={styles.button} type="submit">Login</button>
            </form>
            </div>
        </body>
        <div className={styles.linkcontainer}>
            <a href="http://appservicewprgroepb.azurewebsites.net/login">Geen account? Maak er hier een aan</a>
        </div>
    </html>
        );
}

export default Login;