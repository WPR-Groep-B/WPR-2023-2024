import React, { useState, useEffect } from 'react';
import styles from '../styles/Register.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Axios from 'axios';

function RegisterAccount() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const location = useLocation();
  const isFromRegisterInfo = location.state && location.state.from === '/register-info';

  useEffect(() => {
    document.title = "Register - Stichting Accessibility";

    // If not coming from RegisterInfo, redirect to RegisterInfo
    if (!isFromRegisterInfo) {
      navigate('/register-info');
    }
  }, [navigate, isFromRegisterInfo]);

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

      const payload = {
        Voornaam: localStorage.getItem('naam'),
        Achternaam: localStorage.getItem('anaam'),
        Geboortedatum: localStorage.getItem('age'),
        AccountType: localStorage.getItem('accountType'),
        BeperkingsType: localStorage.getItem('beperking'),
        Aandoening: localStorage.getItem('aandoening'),
        Beschikbaarheid: localStorage.getItem('beschikbaarheid'),
        Hulpmiddelen: localStorage.getItem('hulpmiddelen'),
        Postcode: localStorage.getItem('postcode'),
        Telefoonnummer: localStorage.getItem('telefoon'),
        BedrijfsNaam: localStorage.getItem('bedrijf'),
        Locatie: localStorage.getItem('locatie'),
        ContactInformatie: localStorage.getItem('contactinformatie'),
        Email: email,
        Wachtwoord: password
      };
      console.log(payload);
      Axios.post('https://localhost:7251/api/User', payload, { headers: { 'Content-Type': 'application/json' } })
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            localStorage.clear();
            localStorage.setItem('jwt', response.data.token);

            console.log(response.data.token);
            alert("Account succesvol aangemaakt!");
            goToHome();
          } else {
            alert("Er is iets fout gegaan!");
          }
        })
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
            <label htmlFor="password">Wachtwoord: <br />
              (Moet minstens 12 karakters lang zijn en een van de volgende tekens bevatten: ! " @ # $ % ^ & * ( ) , . ? " : { } | &lt; &gt; )</label>
            <input type="password" id="password" name="password" minLength="12" placeholder="bv: wachtwoord123" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div>
            <label htmlFor="confirmPassword">Bevestig Wachtwoord:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" minLength="12" placeholder="Herhaal Wachtwoord" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>

          <hr></hr>
          <button
            className={styles.registerbtn}
            type="button"
            onClick={handleSubmit}
            disabled={
              !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email) ||
              password.length < 12 ||
              confirmPassword.length < 12 ||
              password !== confirmPassword ||
              !/[!@#$%^&*(),.?":{}|<>]/g.test(password)
            }
          >Bevestig</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterAccount;
