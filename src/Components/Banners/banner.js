import React from 'react';
import "./banner.css";
import FormComp from '../FormComp';
const Banner = ({loginForm}) => {
    return (
        <div className="banner">
            <div className="container">
                <div className="bnr-cnt">
                    <h1>Generate more leads with a professional<br/> landing page!</h1>
                    <FormComp/>
                </div>
            </div>
        </div>
    );
};

export default Banner;