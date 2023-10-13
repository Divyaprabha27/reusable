import React from 'react';
import "./Signup.css";
import FormComp from '../FormComp';
const Signup = ({loginForm}) => {
    return (
        <div className="signup">
            <div className="container">
                <div className="sign-cnt">
                    <h1>Ready to get started? Sign up now!</h1>
                    <FormComp/>
                </div>
            </div>
        </div>
    );
};

export default Signup;