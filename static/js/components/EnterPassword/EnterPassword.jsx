import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import CryptoJS from 'crypto-js';

import { ENCRYPTED } from '../constants';
import './EnterPassword.css';

function EnterPassword(props) {
  const { setGivenPassword } = props;
  const [passwordInput, setPasswordInput] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = ({ target: { value } }) => {
    setPasswordInput(value);

    inputRef.current.classList.remove('input-error');
  };

  const handleSubmit = e => {
    /* givenPassword needed for state update in PortfolioDetail */
    setGivenPassword(passwordInput);

    /* sessionStorage needed to keep correct password saved */
    window.sessionStorage.setItem('password', passwordInput);

    const encrypted = CryptoJS.MD5(passwordInput).toString(CryptoJS.enc.Hex);

    if (encrypted !== ENCRYPTED) {
      inputRef.current.classList.add('input-error');
    }

    setPasswordInput('');
  };

  return (
    <div className="enter-password-container">
      <div className="enter-password-header">
        <h1>Please enter the password to</h1>
        <h1>view this case study</h1>
      </div>
      <div className="enter-password-form">
        <div className="enter-password-input">
          <input
            type="password"
            name="password"
            required
            size={10}
            onChange={handleInputChange}
            value={passwordInput}
            className="password-input"
            ref={inputRef}
          />
          <img
            src="/Enter.png"
            className="enter-button"
            alt="Button Labeled with Enter"
            onClick={handleSubmit}
          />
        </div>

        <Link className="back-button" to="/portfolio">
          <img src="/Back.png" alt="Button Labeled with Back" />
        </Link>
      </div>
    </div>
  );
}

export default EnterPassword;
