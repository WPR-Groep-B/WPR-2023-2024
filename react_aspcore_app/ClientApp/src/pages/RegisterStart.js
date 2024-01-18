import React, { useState, useEffect } from 'react';
import styles from '../styles/Register.module.css';
import { useNavigate } from 'react-router-dom';

function RegisterName() {
  useEffect(() => {
    document.title = "Register - Stichting Accessibility";
  }, []);

  const navigate = useNavigate();
  const [naam, setNaam] = useState('');
  const [anaam, setAnaam] = useState('');


  const handleNaamChange = (e) => {
    setNaam(e.target.value);
  };

  const handleAnaamChange = (e) => {
    setAnaam(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (naam.trim() !== '' && anaam.trim() !== '') {
      // Use Link to navigate to RegisterInfo and pass state
      navigate('/register-info', { state: { from: '/register-start' } });
      localStorage.setItem('naam', naam);
      localStorage.setItem('anaam', anaam);

    } else {
      console.error("Please fill in both required fields");
    }
  };


  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1>Registratie</h1>
        <p>Gelieve hier uw Voor- en Achternaam op te geven</p>

        <hr></hr>
        <form className={styles.form} onSubmit={handleSubmit}>

          <div>
            <label htmlFor="firstName">Voornaam:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Voornaam"
              required
              value={naam}
              onChange={handleNaamChange}
            />
          </div>

          <div>
            <label htmlFor="lastName">Achternaam:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Achternaam"
              required
              value={anaam}
              onChange={handleAnaamChange}
            />
          </div>

          <hr></hr>

          {/* Use Link component to navigate to RegisterInfo */}
          <button className={styles.registerbtn} type="submit">Volgende</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterName;