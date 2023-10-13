import React from 'react';
import "./head.css";

const Header = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="sitename">
                    <h2>Start Bootstrap</h2>
                </div>
                <div className="sign-button">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </div>
           
        </div>
    );
};

export default Header;