import React, { useEffect } from 'react';
import styles from '../styles/Account.module.css';
import accountimg from '../images/Account_Icon.png';

function Account() {

  useEffect(() => {
    document.title = 'Account - Stichting Accessibility';
  }, []);

  return (
    <body className={styles.body}>
      <div className={styles.container}>
        <div className={styles.acccontainer}>
          <img className={styles.img} alt="Account icon" src={accountimg} />
          <h1>Mijn Account</h1>
        </div>
        <hr />
        <div>
            <div>
              <h2>Persoonlijke informatie</h2>
            </div>
        </div>
      </div>
    </body>
  );
}

export default Account;