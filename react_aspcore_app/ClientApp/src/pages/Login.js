import styles from '../styles/Login.module.css';
import GoogleLoginComponent from '../components/googleLogin';
import LocalLogin from '../components/LocalLogin';

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <div>
                <GoogleLoginComponent />
            </div>
        </div>
    );
}

export default Login;