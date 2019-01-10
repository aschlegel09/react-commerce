import React from 'react';
import { GoogleLogin } from 'react-google-login';
import config from '../config.json';

const responseGoogle = (response) => {
    console.log(response);
}

function Google() {
    return (
    <div>
        <GoogleLogin
            clientId={config.GOOGLE_CLIENT_ID}
            buttonText="Sign In with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
        />
    </div>
    )
}

export default Google;