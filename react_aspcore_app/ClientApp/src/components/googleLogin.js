import { useEffect } from 'react';
import styles from '../styles/Login.module.css';
import axios from 'axios';

function GoogleLoginComponent() {

    function handleCredentialResponse(response) {
        console.log(response.credential);
        //https://localhost:7251/api/user/googlelogin
        axios.post('/api/user/googlelogin', {
            GoogleToken: response.credential
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                localStorage.setItem('jwt', response.data.token);
                console.log(response.data.token);
                alert("Succesvol ingelogd!");
                window.location.href = "/";
            }
            else {
                alert("Er is iets fout gegaan!");
            }
        })
    }

    useEffect(() => {
        /*global google*/
        google.accounts.id.initialize({
            client_id: "432096940340-mbj1p2us3bgq1t2f89h7ln18me2bn82e.apps.googleusercontent.com",
            callback: handleCredentialResponse,
            auto_select: true,
        });

        google.accounts.id.renderButton(
            document.getElementById("g_id_onload"),
            { theme: "outline", size: "large" }
        );
    }, []);

    return (
        <div className={styles.google}>
            <div id="g_id_onload"></div>
        </div>
    );
}

export default GoogleLoginComponent;
