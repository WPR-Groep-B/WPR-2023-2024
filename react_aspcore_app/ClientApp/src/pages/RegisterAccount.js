import React, { useState, useEffect } from 'react';
import styles from '../styles/Register.module.css';
import { useNavigate } from 'react-router-dom';

function RegisterAccount() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    document.title = "Register - Stichting Accessibility";
  } );

  const goToHome = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert("Vul alle velden in a.u.b.");
    } else if (password !== confirmPassword) {
      alert("Wachtwoorden komen niet overeen");
    } else {
      alert("Account succesvol aangemaakt!");
      goToHome();
    }
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
            <input type="email" id="email" name="email" placeholder="text@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div>
            <label htmlFor="password">Wachtwoord:</label>
            <input type="password" id="password" name="password" minLength="12" placeholder="bv: wachtwoord123" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div>
            <label htmlFor="confirmPassword">Bevestig Wachtwoord:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" minLength="12" placeholder="Herhaal Wachtwoord" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>

          <hr></hr>
          <button className={styles.registerbtn} type="button" onClick={handleSubmit}>Bevestig</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterAccount;