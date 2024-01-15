import React, { useState, useEffect } from 'react';
import styles from '../styles/Register.module.css';
import { useNavigate } from 'react-router-dom';

function RegisterInfo() {
    useEffect(() => {
        document.title = "Register - Stichting Accessibility";
    }, []);

    const [selectedOption, setSelectedOption] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [beperking, setBeperking] = useState('');
    const [bedrijf, setBedrijf] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const showFields = (option) => {
        setSelectedOption(option);
    };

    const navigate = useNavigate();

    const goToRegisterAccount = () => {
        navigate('/register-account');
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleBeperkingChange = (e) => {
        setBeperking(e.target.value);
    };

    const handleBedrijfChange = (e) => {
        setBedrijf(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (age.trim() !== '' && gender.trim() !== '' && (selectedOption === 'Ervaring' ? beperking.trim() !== '' : true) && (selectedOption === 'Bedrijf' ? bedrijf.trim() !== '' : true)) {
            goToRegisterAccount();
        } else {
            setErrorMessage("Please fill in all required fields");
        }
    };

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h1>Uw informatie</h1>
                <p>Algemene Informatie</p>

                <hr />

                <form className={styles.form} onSubmit={handleSubmit}>

                    <div className={styles.displayCntr}>

                        <div>
                            <label htmlFor="age">Leeftijd:</label>
                            <input
                                type="date"
                                id="age"
                                name="age"
                                required
                                value={age}
                                onChange={handleAgeChange}
                            />
                        </div>

                        <div>
                            <label className={styles.labelFlex} htmlFor="gender">Geslacht:</label>
                            <select
                                id="gender"
                                name="gender"
                                required
                                value={gender}
                                onChange={handleGenderChange}
                            >
                                <option value="">Kies een optie</option>
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
                            <select
                                className={styles.select}
                                id="options"
                                onChange={(e) => showFields(e.target.value)}
                                required
                            >
                                <option value="">Kies een optie</option>
                                <option value="Ervaring">Ervaringsdeskundige</option>
                                <option value="Bedrijf">Bedrijf</option>
                            </select>
                        </div>

                        <div id="ErvaringFields" className={selectedOption === 'Ervaring' ? styles.show : styles.hidden}>
                            <label htmlFor="beperking">Beperking:</label>
                            <input
                                style={{ width: '225px' }}
                                type="text"
                                id="beperking"
                                name="beperking"
                                placeholder="bijv. Doof"
                                value={beperking}
                                onChange={handleBeperkingChange}
                                required
                            />
                        </div>

                        <div id="BedrijfFields" className={selectedOption === 'Bedrijf' ? styles.show : styles.hidden}>
                            <label htmlFor="bedrijf">Bedrijfsnaam</label>
                            <input
                                style={{ width: '225px' }}
                                type="text"
                                id="bedrijf"
                                name="bedrijf"
                                placeholder="bijv. ANWB"
                                value={bedrijf}
                                onChange={handleBedrijfChange}
                            />
                        </div>
                    </div>

                    {errorMessage && <div className={styles.error}>{errorMessage}</div>}
                    <button className={styles.registerbtn} type="submit">Volgende</button>
                    <hr />
                </form>
            </div>
        </div>
    );
}

export default RegisterInfo;
