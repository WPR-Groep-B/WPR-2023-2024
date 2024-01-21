import React, { useState, useEffect } from 'react';
import styles from '../styles/Register.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

function RegisterInfo() {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');
    const [age, setAge] = useState('');
    const [AccoutType, setAccoutType] = useState('');
    const [Postcode, setPostcode] = useState('');
    const [telefoon, setTelefoon] = useState('');
    const [bedrijf, setBedrijf] = useState('');
    const [Locatie, setLocatie] = useState('');
    const [ContactInformatie, setContactInformatie] = useState('');
    const location = useLocation();
    const isFromRegisterStart = location.state && location.state.from === '/register-start';

    useEffect(() => {
        document.title = "Register - Stichting Accessibility";

        // If not coming from RegisterInfo, redirect to RegisterInfo
        if (!isFromRegisterStart) {
            navigate('/register-start');
        }
    }, [navigate, isFromRegisterStart]);

    // If user tries to leave page, ask for confirmation
    useEffect(() => {
        const handleUnload = (event) => {
            event.preventDefault();
            event.returnValue = '';
        };

        window.addEventListener('beforeunload', handleUnload);

        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, []);

    const showFields = (option) => {
        setSelectedOption(option);
    };

    const [inputWidth, setInputWidth] = useState(window.innerWidth <= 600 ? '100%' : '225px');

    useEffect(() => {
        const handleResize = () => {
            setInputWidth(window.innerWidth <= 600 ? '100%' : '225px');
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const goToRegisterAccount = () => {
        navigate('/register-account', { state: { from: '/register-info' } });
    };

    const goToRegisterBeperking = () => {
        navigate('/register-beperking', { state: { from: '/register-info' } });
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const HandleAcountTypeChange = (e) => {
        showFields(e.target.value);
        setAccoutType(e.target.value);
        console.log(e.target.value);
    };

    const handlePostcodeChange = (e) => {
        setPostcode(e.target.value);
    };

    const handleTelefoonChange = (e) => {
        setTelefoon(e.target.value);
    };

    const handleBedrijfChange = (e) => {
        setBedrijf(e.target.value);
    };

    const handleLocatieChange = (e) => {
        setLocatie(e.target.value);
    };

    const handleContactInformatieChange = (e) => {
        setContactInformatie(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (age.trim() !== '' && (
            (selectedOption === 'Ervaring' && (
                Postcode.trim() !== '' &&
                telefoon.trim() !== ''
            )) ||
            (selectedOption === 'Bedrijf' && (
                bedrijf.trim() !== '' &&
                Locatie.trim() !== '' &&
                ContactInformatie.trim() !== ''
            )
            )
        )) {

            // Perform additional checks if necessary before allowing access to RegisterAccount
            localStorage.setItem('age', age);
            localStorage.setItem('bedrijf', bedrijf);
            localStorage.setItem('accountType', AccoutType);
            localStorage.setItem('postcode', Postcode);
            localStorage.setItem('telefoon', telefoon);
            localStorage.setItem('locatie', Locatie);
            localStorage.setItem('contactinformatie', ContactInformatie);

            if (selectedOption === 'Ervaring') {
                goToRegisterBeperking();
            } else if (selectedOption === 'Bedrijf') {
                goToRegisterAccount();
            }
        } else {
            alert("Please fill in all required fields");
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
                            <label htmlFor="age">geboortedatum:</label>
                            <input type="date" id="age" name="age" value={age} onChange={handleAgeChange} required />

                            <label htmlFor="options">Type Account</label>
                            <select
                                className={styles.select}
                                id="options"
                                onChange={HandleAcountTypeChange}
                                value={AccoutType}
                                required
                            >
                                <option value="">Kies een optie</option>
                                <option value="Ervaring">Ervaringsdeskundige</option>
                                <option value="Bedrijf">Bedrijf</option>
                            </select>
                        </div>

                        <div id="ErvaringFields" className={selectedOption === 'Ervaring' ? styles.show : styles.hidden}>
                            <label htmlFor="Postcode">Postcode:</label>
                            <input
                                style={{ width: inputWidth }}
                                type="text"
                                id="postcode"
                                name="podtcode"
                                placeholder="bijv. 1234AA"
                                value={Postcode}
                                onChange={handlePostcodeChange}
                            />

                            <label htmlFor="ErvaringFields">Telefoonnummer:</label>
                            <input
                                style={{ width: inputWidth }}
                                type="text"
                                id="telefoon"
                                name="telefoon"
                                placeholder="bijv. 0612345678"
                                value={telefoon}
                                onChange={handleTelefoonChange}
                            />
                        </div>

                        <div id="BedrijfFields" className={selectedOption === 'Bedrijf' ? styles.show : styles.hidden}>
                            <label htmlFor="bedrijf">Bedrijfsnaam</label>
                            <input
                                style={{ width: inputWidth }}
                                type="text"
                                id="bedrijf"
                                name="bedrijf"
                                placeholder="bijv. ANWB"
                                value={bedrijf}
                                onChange={handleBedrijfChange}
                            />
                            <label htmlFor="Locatie">Locatie</label>
                            <input
                                style={{ width: inputWidth }}
                                type="text"
                                id="Locatie"
                                name="Locatie"
                                placeholder="bijv. Amsterdam"
                                value={Locatie}
                                onChange={handleLocatieChange}
                            />
                            <label htmlFor="ContactInformatie">Contact Informatie</label>
                            <input
                                style={{ width: inputWidth }}
                                type="text"
                                id="ContactInformatie"
                                name="ContactInformatie"
                                placeholder="bijv. 0612345678"
                                value={ContactInformatie}
                                onChange={handleContactInformatieChange}
                            />
                        </div>
                    </div>
                    <hr />
                    <button
                        className={styles.registerbtn}
                        type="submit"
                        disabled={
                            age === "" ||
                            AccoutType === "" ||
                            ((Postcode.trim().length < 6 || telefoon.trim().length !== 10) && (bedrijf === "" || Locatie === "" || ContactInformatie.trim().length !== 11))
                        }
                    >Volgende</button>
                </form>
            </div>
        </div >
    );
}

export default RegisterInfo;