import React from 'react';
import FacebookLogin from 'react-facebook-login';
import config from '../config.json';

const facebookResponse = (response) => {
    console.log(response);
}

function Facebook() {
    return (
    <div>
        <FacebookLogin
            appId={config.FACEBOOK_APP_ID}
            autoLoad={false}
            fields="name,email,picture"
            callback={facebookResponse}
        />
    </div>
    )
}

export default Facebook;