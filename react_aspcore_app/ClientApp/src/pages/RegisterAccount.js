import React, { useState, useEffect } from 'react';
import styles from '../styles/Register.module.css';
import ErrorMessageModal from './ErrorMessageModal';
import { useNavigate } from 'react-router-dom';

function RegisterAccount() {
    useEffect(() => {
        document.title = "Stichting Accessibility - Register";
      }, []);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const goToRegisterInfo = () => {
        navigate('/');
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '') {
            if (password === confirmPassword) {
                setErrorMessage('');
                goToRegisterInfo();
            } else {
                setErrorMessage("Wachtwoorden komen niet overeen");
                setShowModal(true);
            }
        } else {
            setErrorMessage("Please fill in all fields");
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setErrorMessage('');
    };

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h1>Stichting Accessibility</h1>
                <p>Gelieve hier uw e-mailadres op te geven en wachtwoord aan te maken</p>

                <hr></hr>

                <form className={styles.form} onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="text@email.com"
                            required
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>

                    {showModal && (
                    <ErrorMessageModal message={errorMessage} onClose={closeModal} />
                    )}

                    <div>
                        <label htmlFor="password">Wachtwoord:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            minLength="12"
                            placeholder="bv: wachtwoord123"
                            required
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword">Bevestig Wachtwoord:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            minLength="12"
                            placeholder="Herhaal Wachtwoord"
                            required
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>

                    <hr></hr>

                    <button className={styles.registerbtn} type="submit">Bevestig</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterAccount;