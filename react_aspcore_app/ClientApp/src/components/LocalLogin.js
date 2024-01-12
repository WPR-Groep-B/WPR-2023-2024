import React, { useState } from 'react';
import styles from '../styles/Login.module.css';
import GoogleLoginComponent from '../components/googleLogin';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const goToLogInPage = () => {
        navigate('/');
    };

    function HandleLogin() {
        if (email === "" || wachtwoord === "") {
            alert("Vul alle velden in!" + email + wachtwoord);
        }
        axios.post('https://localhost:7251/api/user/login', {
            email: email,
            wachtwoord: password
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                localStorage.setItem('jwt', response.data.token);
                console.log(response.data.token);
                alert("Succesvol ingelogd!");
                goToLogInPage();
            }
            else {
                alert("Er is iets fout gegaan!");
            }
        })
    }

    return (
        <html>
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
                            onChange={e => setEmail(e.target.value)}
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
                            onChange={e => setPassword(e.target.value)}
                        />

                        <hr></hr>
                        <button className={styles.button} type="submit">Login</button>
                    </form>
                </div>
            </body>
            <div className={styles.linkcontainer}>
                <GoogleLoginComponent />
                <a className={styles.a} href="/registerStart">Geen account? Maak er hier een aan</a>
            </div>
        </html>
    );
}

export default Login;