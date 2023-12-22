import styles from '../styles/Register.module.css';

function Register() {
    return (
        <html>
            <body className={styles.body}>
                <div className={styles.container}>
                <h1>Registratie</h1>
                <form className={styles.form}>
                    <hr></hr>
                    <div>
                        <label for="firstName">Voornaam:</label>
                        <input type="text" id="firstName" name="firstName" placeholder="Voornaam" required></input>
                    </div>                   

                    <div>
                        <label for="lastName">Achternaam:</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Achternaam" required></input>
                    </div>                    

                    <div>
                        <label for="age">Leeftijd:</label>
                        <input type="date" id="age" name="age" required></input>
                    </div>

                    <div>
                        <label for="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" required></input>
                    </div>

                    <div>
                        <label for="postcode">Postcode:</label>
                        <input type="text" id="postcode" name="postcode" placeholder="1234 AB" required></input>
                    </div>

                    <div>
                        Geslacht:
                        <br></br>
                        <div className={styles.radiogroup}>
                            <label for="male">Man:</label>
                            <input type="radio" id="gender" name="gender" value="male" required></input>
                        </div>
                        <div className={styles.radiogroup}>
                            <label for="female">Vrouw:</label>
                            <input type="radio" id="gender" name="gender" value="female" required></input>
                        </div>
                        <div className={styles.radiogroup}>
                            <label for="else">Anders:</label>
                            <input type="radio" id="gender" name="gender" value="else" required></input>
                        </div>
                        <div className={styles.radiogroup}>
                            <label for="undisclosed">Zeg ik liever niet:</label>
                            <input type="radio" id="gender" name="gender" value="undisclosed" required></input>
                        </div>
                    </div>

                    <div>
                        <label for="disability">Beperking:</label>
                        <input type="text" id="disability" name="disability" placeholder="bv: Blind" required></input>
                    </div>

                    <div>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email"  placeholder="text@email.com" required></input>
                    </div>

                    <div>
                        <label for="password">Wachtwoord:</label>
                        <input type="password" id="password" name="password" minlength="12" placeholder="bv: wachtwoord123" required></input>
                    </div>

                    <div>
                        <label for="confirmPassword">Bevestig Wachtwoord:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" minlength="12" placeholder="Herhaal Wachtwoord" required></input>
                    </div>
                    
                    <hr></hr>

                    <button className={styles.registerbtn}type="submit">Registreer</button>
                </form>
                </div>
            </body>
        </html>
        );
}

export default Register;