import React, { useState } from 'react';
import styles from '../styles/Login.module.css';
import GoogleLoginComponent from '../components/googleLogin';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const goToLogInPage = () => {
        navigate('/');
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (email.trim() !== '' && password.trim() !== '') {
            goToLogInPage();
        } else {
            console.error("Email and password are required");
        }
    };

    return (
        <html lang="nl">
            <body className={styles.body}>
                <div className={styles.container}>
                    <h1>Login</h1>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <hr></hr>
                        <label className={styles.label} htmlFor="email">Email:</label>
                        <input
                            className={styles.input}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="text@email.com"
                            required
                            value={email}
                            onChange={handleEmailChange}
                        />

                        <label className={styles.label} htmlFor="password">Password:</label>
                        <input
                            className={styles.input}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Wachtwoord123!"
                            required
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        
                        <hr></hr>
                        <button className={styles.button} type="submit">Login</button>
                    </form>
                </div>
            </body>
            <div className={styles.linkcontainer}>
                <GoogleLoginComponent />
                <a className={styles.a} href="/register-start">Geen account? Maak er hier een aan</a>
            </div>
        </html>
    );
}

export default Login;