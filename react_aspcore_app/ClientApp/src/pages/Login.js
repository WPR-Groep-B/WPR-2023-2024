import LocalLogin from '../components/LocalLogin';
import React, { useEffect } from 'react';

//const clientID = "432096940340 - mbj1p2us3bgq1t2f89h7ln18me2bn82e.apps.googleusercontent.com";


function Login() {
    useEffect(() => {
        document.title = "Stichting Accessibility - Login";
      }, []);

    return (
        <div>
            <LocalLogin />
        </div>
    );
}

export default Login;