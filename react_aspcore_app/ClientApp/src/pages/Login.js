import styles from '../styles/Login.module.css';

function Login() {
    return (
        <html>
        <head>
            <meta charset="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link rel="stylesheet" href="Login.module.css"></link>
            <title>Login Form</title>
        </head>
    <body className={styles.body}>
        <form className={styles.form}>
            <h1>Login</h1>
            <label className={styles.label} for="email">Email:</label>
            <input className={styles.input} type="email" id="email" name="email" required></input>
            <label className={styles.label} for="password">Password:</label>
            <input className={styles.input} type="password" id="password" name="password" required></input>
            <br></br>
            <button className={styles.button} type="submit">Login</button>
            <br></br>
            <br></br>
            <a href="https://appservicewprgroepb.azurewebsites.net/register" rel="noreferrer">Geen account? Maak er hier een aan</a>
            </form>
        </body>
    </html>
        );
}

export default Login;