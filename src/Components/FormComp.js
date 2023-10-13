import React from 'react';

const FormComp = () => {
    return (
        <div className="loginForm">
        <form>
          <input type="email" placeholder="Email Address" />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
};

export default FormComp;