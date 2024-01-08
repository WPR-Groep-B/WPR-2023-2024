import styles from '../styles/Login.module.css';
import GoogleLoginComponent from '../components/googleLogin';
import LocalLogin from '../components/LocalLogin';

const clientID = "432096940340 - mbj1p2us3bgq1t2f89h7ln18me2bn82e.apps.googleusercontent.com";


function Login() {


    return (
        <div>
            <LocalLogin />
            <GoogleLoginComponent />
        </div>
    );
}

export default Login;