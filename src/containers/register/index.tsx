import React, { useState, FormEvent } from 'react';
import RegisterView from './register';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log('registered')
    };

    return (
        <RegisterView
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleRegisterSubmit={handleRegisterSubmit} />
    );
};

export default Register;