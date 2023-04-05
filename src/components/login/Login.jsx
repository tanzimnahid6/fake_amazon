import React from 'react';
import './login.css'

const Login = () => {
    return (
        <div>
            <div className='container'>
                <form className='main' action="">
                <h1 className="title">Member login</h1>
                <input className="inp" type="text" placeholder="Username" required></input>
                <input className="inp" type="password" placeholder="Password" required></input>
                <input className="inp btn" type="submit" value="Sign in"></input>
                <div class="abc">
                <div><input type="checkbox"></input><span>Remember Me</span></div>
                <p><a href="#">Forgot Password?</a></p>
                </div>

                </form>

            </div>
        </div>
    );
};

export default Login;