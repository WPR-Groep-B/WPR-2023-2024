import React, { useEffect } from 'react';
import styles from '../styles/Account.module.css';
import accountimg from '../images/Account_Icon.png';

function Account() {
//   const [jwt, setJwt] = useState(localStorage.getItem('jwt'));
//   const [decodedToken, setDecodedToken] = useState(null);
//   const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Stichting Accessibility - Account';
  }, []);

  return (
    <html lang='nl'>
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
    </html>
  );
}

export default Account;