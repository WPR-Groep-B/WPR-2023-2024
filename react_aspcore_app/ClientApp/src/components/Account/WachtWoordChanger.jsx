import React from "react";
import styles from "../../styles/Login.module.css";
import { useState } from "react";

function WachtWoordChanger({ setCurrentWindow, ChangePassword }) {

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [repeatNewPassword, setRepeatNewPassword] = useState("");

    const HandlePasswordChange = (e) => {
        e.preventDefault();
        if (newPassword !== repeatNewPassword) {
            alert("Wachtwoorden komen niet overeen");
            return;
        }

        ChangePassword(oldPassword, newPassword);
        alert("Wachtwoord succesvol veranderd!");
        setCurrentWindow("AccountInfo");
    }

    return (
        <body className={styles.body}>
            <div className={styles.container}>
                <div>
                    <h2>Wachtwoord veranderen</h2>
                </div>
                <div className={styles.info}>

                    <form className={styles.form}>
                        <div>
                            <label className={styles.label}>Oud wachtwoord:</label>
                            <input className={styles.input} type="password" name="oldpassword" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
                        </div>
                        <div>
                            <label className={styles.label}>Nieuw wachtwoord: (Moet minstens 12 karakters lang zijn en een van de volgende tekens bevatten: ! " @ # $ % ^ & * ( ) , . ? " : { } | &lt; &gt; )</label>
                            <input className={styles.input} type="password" name="newpassword" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                        </div>
                        <div>
                            <label className={styles.label}>Herhaal nieuw wachtwoord:</label>
                            <input className={styles.input} type="password" name="repeatnewpassword" value={repeatNewPassword} onChange={e => setRepeatNewPassword(e.target.value)} />
                        </div>

                        <button className={styles.confirmButton}
                            onClick={(e) => HandlePasswordChange(e)}
                            disabled={
                                oldPassword === "" ||
                                newPassword.length < 12 ||
                                repeatNewPassword.length < 12 ||
                                newPassword !== repeatNewPassword ||
                                !/[!@#$%^&*(),.?":{}|<>]/g.test(newPassword)}
                        >Wachtwoord veranderen</button>
                    </form>

                    <hr />

                    <button className={styles.button}
                        onClick={() => { setCurrentWindow("AccountInfo") }}
                    >Terug</button>
                </div>
            </div >
        </body >
    )
}

export default WachtWoordChanger;