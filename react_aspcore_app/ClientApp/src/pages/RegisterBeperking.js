import React, { useState, useEffect } from 'react';
import styles from '../styles/Register.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

function RegisterBeperking() {
    const navigate = useNavigate();
    const [beperking, setBeperking] = useState('');
    const [aandoening, setAandoening] = useState('');
    const [beschikbaarheid, setBeschikbaarheid] = useState('');
    const [hulpmiddelen, setHulpmiddelen] = useState('');
    const location = useLocation();
    const isFromRegisterInfo = location.state && location.state.from === '/register-info';

    const [inputWidth, setInputWidth] = useState(window.innerWidth <= 600 ? '100%' : '225px');

    useEffect(() => {
        document.title = "Register - Stichting Accessibility";

        if (!isFromRegisterInfo) {
            navigate('/register-start');
        }
    }, [navigate, isFromRegisterInfo]);

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

    const handleAandoeningChange = (e) => {
        setAandoening(e.target.value);
    };

    const handleBeperkingChange = (e) => {
        setBeperking(e.target.value);
    };

    const handleBeschikbaarheidChange = (e) => {
        setBeschikbaarheid(e.target.value);
    };

    const handleHulpmiddelenChange = (e) => {
        setHulpmiddelen(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (beperking.trim() !== '' && aandoening.trim() !== '' && beschikbaarheid.trim() !== '' && hulpmiddelen.trim() !== '') {
            localStorage.setItem('beperking', beperking);
            localStorage.setItem('beschikbaarheid', beschikbaarheid);
            localStorage.setItem('hulpmiddelen', hulpmiddelen);
            localStorage.setItem('aandoening', aandoening);
            // Use Link to navigate to RegisterInfo and pass state
            navigate('/register-account', { state: { from: '/register-info' } });

        } else {
            alert("Please fill in both required fields");
        }
    };


    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h1>Uw beperking</h1>
                <p>Gelieve hier wat aanvullende informatie te geven over uw beperking</p>

                <hr></hr>
                <form className={styles.form} onSubmit={handleSubmit}>

                    <div className={styles.parentDiv}>
                        <div>
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
                        </div>

                        <di>
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
                        </di>
                    </div>

                    <div className={styles.parentDiv}>
                        <div>
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
                        </div>

                        <div className={styles.inputPadding}>
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
                    </div>

                    <hr></hr>

                    {/* Use Link component to navigate to RegisterInfo */}
                    <button className={styles.registerbtn} type="submit">Volgende</button>
                </form>
            </div >
        </div >
    );
}

export default RegisterBeperking;