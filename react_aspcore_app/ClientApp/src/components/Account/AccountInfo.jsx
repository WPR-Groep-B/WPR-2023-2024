import styles from '../../styles/Account.module.css';
import accountimg from '../../images/Account_Icon.png';

function AccountInfo({ setCurrentWindow}) {

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
                    <div className={styles.info}>
                        <button className={styles.button}
                            onClick={() => setCurrentWindow("WachtWoordChanger")}
                        >Wachtwoord veranderen</button>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default AccountInfo;