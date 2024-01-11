import React, { useState } from 'react';
import styles from './regStyles/Register.module.css';
import { useNavigate } from 'react-router-dom';

function RegisterInfo() {
    const [selectedOption, setSelectedOption] = useState('');

    const showFields = (option) => {
      setSelectedOption(option);
    };

    const navigate = useNavigate();
  
    const goToRegisterAccount = () => {
        navigate('/registerAccount');
    };

    return (
        <html>
        <body className={styles.removeScrollbar}>
        <div className={styles.body}>
            <div className={styles.container}>
                <h1>Stichting Accessibility</h1>
                <p>Algemene Informatie</p>

                <form className={styles.form}>
            
                <div className={styles.displayCntr}>

                    <div>
                        <label htmlFor="age">Leeftijd:</label>
                        <input type="date" id="age" name="age" required />
                    </div>

                    <div>
                        <label className={styles.labelFlex} htmlFor="gender">Geslacht:</label>                    
                        <select id="gender" name="gender" required>
                        <option value="male">Man</option>
                        <option value="female">Vrouw</option>
                        <option value="else">Anders</option>
                        <option value="undisclosed">Zeg ik liever niet</option>
                        </select>
                    </div>

                </div>

                <div className={styles.displayCntr}>
                    <div>
                    <label htmlFor="options">Type Account</label>
                    <select className={styles.select} id="options" onChange={(e) => showFields(e.target.value)}>
                        <option value="">Kies een optie</option>
                        <option value="Ervaring">Ervaringsdeskundige</option>
                        <option value="Bedrijf">Bedrijf</option>
                    </select>
                    </div>

                    <div id="ErvaringFields" className={selectedOption === 'Ervaring' ? '' : styles.hidden}>
                        <label htmlFor="beperking">Beperking:</label>
                        <input style={{ width: '225px' }} type="text" id="beperking" name="beperking" placeholder="bijv. Doof" />
                    </div>

                    <div id="BedrijfFields" className={selectedOption === 'Bedrijf' ? '' : styles.hidden}>
                        <label htmlFor="bedrijf">Bedrijfsnaam</label>
                        <input style={{ width: '225px' }} type="text" id="bedrijf" name="bedrijf" placeholder="bijv. ANWB"/>
                    </div>


                </div>

                <button className={styles.registerbtn} type="submit" onClick={() => goToRegisterAccount()}>Volgende</button>

                </form>

            </div>

        </div>
        </body>
        </html>
    );
}

export default RegisterInfo;