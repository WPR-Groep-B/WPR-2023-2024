import { useEffect } from 'react';

function GoogleLoginComponent() {

    function handleCredentialResponse(response) {
        console.log(response.credential);
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
        <div>
            <div id="g_id_onload"></div>

        </div>
    );
}

export default GoogleLoginComponent;
