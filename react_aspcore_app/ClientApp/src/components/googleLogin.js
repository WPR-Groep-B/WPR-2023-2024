import { GoogleLogin } from 'react-google-login';

const clientID = "432096940340 - mbj1p2us3bgq1t2f89h7ln18me2bn82e.apps.googleusercontent.com";

function GoogleLoginComponent() {

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    };   

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    return (
        <GoogleLogin
            clientId={clientID}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn={true}
        />
    );
}

export default GoogleLoginComponent;
