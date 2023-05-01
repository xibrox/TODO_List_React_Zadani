import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            }
            else {
                navigate('/Homepage');
            }
        });
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" action={`/Homepage`}>
                <label htmlFor="name">Jméno</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" name="username" placeholder="tvojeJmeno" required />
            
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="********" required />

                <input onClick={login} className="btn-grad" type="submit" value="Login" />
                <h1>{loginStatus}</h1>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Nemáš account? Register tady</button>
        </div>
    )
}