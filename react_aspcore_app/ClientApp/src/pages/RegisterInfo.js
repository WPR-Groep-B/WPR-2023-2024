import React, { useState, useEffect } from 'react';
import styles from '../styles/Register.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

function RegisterInfo() {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');
    const [age, setAge] = useState('');
    const [beperking, setBeperking] = useState('');
    const [aandoening, setAandoening] = useState('');
    const [beschikbaarheid, setBeschikbaarheid] = useState('');
    const [AccoutType, setAccoutType] = useState('');
    const [hulpmiddelen, setHulpmiddelen] = useState('');
    const [Postcode, setPostcode] = useState('');
    const [telefoon, setTelefoon] = useState('');
    const [bedrijf, setBedrijf] = useState('');
    const [Locatie, setLocatie] = useState('');
    const [ContactInformatie, setContactInformatie] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const location = useLocation();
    const isFromRegisterStart = location.state && location.state.from === '/register-start';

    useEffect(() => {
        document.title = "Register - Stichting Accessibility";

        // If not coming from RegisterInfo, redirect to RegisterInfo
        if (!isFromRegisterStart) {
            navigate('/register-start');
        }
    }, [navigate, isFromRegisterStart]);

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

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleAandoeningChange = (e) => {
        setAandoening(e.target.value);
    };

    const handleBeperkingChange = (e) => {
        setBeperking(e.target.value);
    };

    const handleBeschikbaarheidChange = (e) => {
        setBeschikbaarheid(e.target.value);
    };

    const HandleAcountTypeChange = (e) => {
        showFields(e.target.value);
        setAccoutType(e.target.value);
        console.log(e.target.value);
    };

    const handleHulpmiddelenChange = (e) => {
        setHulpmiddelen(e.target.value);
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
                telefoon.trim() !== '' &&
                beperking.trim() !== '' &&
                aandoening.trim() !== '' &&
                aandoening.trim() !== null &&
                beschikbaarheid.trim() !== '' &&
                hulpmiddelen.trim() !== ''
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
            localStorage.setItem('beperking', beperking);
            localStorage.setItem('bedrijf', bedrijf);
            localStorage.setItem('beschikbaarheid', beschikbaarheid);
            localStorage.setItem('accountType', AccoutType);
            localStorage.setItem('hulpmiddelen', hulpmiddelen);
            localStorage.setItem('postcode', Postcode);
            localStorage.setItem('telefoon', telefoon);
            localStorage.setItem('aandoening', aandoening);
            localStorage.setItem('locatie', Locatie);
            localStorage.setItem('contactinformatie', ContactInformatie);


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
                            <label htmlFor="age">geboortedatum:</label>
                            <input type="date" id="age" name="age" value={age} onChange={handleAgeChange} required />

                            <label htmlFor="options">Type Account</label>
                            <select
                                className={styles.select}
                                id="options"
                                onChange={HandleAcountTypeChange}
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

                            <label htmlFor="ErvaringFields">telefoonnummer:</label>
                            <input
                                style={{ width: inputWidth }}
                                type="text"
                                id="telefoon"
                                name="telefoon"
                                placeholder="bijv. 0612345678"
                                value={telefoon}
                                onChange={handleTelefoonChange}
                            />

                            <label htmlFor="ErvaringFields">Type beperking</label>
                            <select
                                className={styles.select}
                                id="TypeBeperkingen"
                                onChange={handleBeperkingChange}
                            >
                                <option value="">Kies een optie</option>
                                <option value="Zicht">Zicht</option>
                                <option value="Gehoor">Gehoor</option>
                                <option value="Mobiliteit">Mobiliteit</option>
                                <option value="Geestlijk">Geestlijk</option>
                            </select>

                            <label htmlFor="ErvaringFields">Aandoening:</label>
                            <input
                                style={{ width: inputWidth }}
                                type="text"
                                id="Aandoening"
                                name="Aandoening"
                                placeholder="bijv. blind, slechtziend of doof"
                                value={aandoening}
                                onChange={handleAandoeningChange}
                            />

                            <label htmlFor="ErvaringFields">beschikbaarheid:</label>
                            <input
                                style={{ width: inputWidth }}
                                type="text"
                                id="beschikbaarheid"
                                name="beschikbaarheid"
                                placeholder="bijv. maandag en vrijdag ochtend"
                                value={beschikbaarheid}
                                onChange={handleBeschikbaarheidChange}
                            />

                            <label htmlFor="ErvaringFields">hulpmiddelen:</label>
                            <input
                                style={{ width: inputWidth }}
                                type="text"
                                id="hulpmiddelen"
                                name="hulpmiddelen"
                                placeholder="bijv. wandelstok of rolstoel"
                                value={hulpmiddelen}
                                onChange={handleHulpmiddelenChange}
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
                            <label htmlFor="ContactInformatie">ContactInformatie</label>
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
                    {errorMessage && <div className={styles.error}>{errorMessage}</div>}
                    <hr />
                    <button className={styles.registerbtn} type="submit">Volgende</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterInfo;