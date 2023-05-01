import React, { useState } from "react";
import Axios from "axios";

export const Register = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [registerStatus, setRegisterStatus] = useState('');

    const register = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/register", {
            username: username,
            email: email,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setRegisterStatus(response.data.message);
            }
            else {
                setRegisterStatus("Account created");
            }
        });
    };

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form">
                <label htmlFor="name">Celé jméno</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" name="username" placeholder="Jan Novák" required />

                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="tvůjemail@gmail.com" required />
            
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" name="password" placeholder="********" required />

                <input onClick={register} className="btn-grad" type="submit" value="Register" />
                <h1>{registerStatus}</h1>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Máš account? Login tady</button>
        </div>
    )
}