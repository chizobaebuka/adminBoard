import React, { useState } from 'react';

interface AuthModalProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    isSignUp: boolean;
}

const AuthModal: React.FC<AuthModalProps> = ({ setShowModal, isSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    console.log(email, password, confirmPassword)

    const handleClick = () => {
        setShowModal(false);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        try {
            if(isSignUp && (password !== confirmPassword)){
                setError('Passwords do not match!')
            }
            console.log('make a post request to our database')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='auth-modal'>
            <div className='close-icon' onClick={handleClick}>ⓧ</div>
            <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOGIN'}</h2>
            <p>By clicking login, you agree to our terms and conditions. Learn how we process your data in our Privacy Policy and Cookie Policy</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    id='email'
                    name='email'
                    placeholder='Email'
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    id='password'
                    name='password'
                    placeholder='Password'
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <input 
                    type="password" 
                    id='password-check'
                    name='password-check'
                    placeholder='Confirm Password'
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <input className='secondary-button' type="submit" />
                <p>{error}</p>
            </form>
            <hr />
            <h2>GET THE APP</h2>
            AUTHMODAL
        </div>
    );
};

export default AuthModal;