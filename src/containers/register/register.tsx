import React, { FormEvent } from 'react';

interface Props {
    username: string;
    password: string;
    setUsername: (newUsername: string) => void;
    setPassword: (newPassword: string) => void;
    handleRegisterSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const RegisterViewWeb = ({ username, password, setUsername, setPassword }: Props) => {

    return (
        <form onSubmit={e => { e.preventDefault(); console.log('registered') }}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" name="username" onChange={e => setUsername(e.target.value)} value={username} />
            <label htmlFor="password">Password</label>
            <input id="password" type="text" name="username" onChange={e => setPassword(e.target.value)} value={password} />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterViewWeb;