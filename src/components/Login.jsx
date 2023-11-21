import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as Auth from '../utils/Auth.jsx';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      const navigate = useNavigate();
      const handleEmail = (e) => {
        setEmail(e.target.value)
      }
      const handlePassword = (e) => {
        setPassword(e.target.value)
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password){
          return;
        }
        Auth.authorize(email, password)
          .then((data) => {
            if(data.jwt){
                setEmail('');
                setPassword('');
              props.onLogin();
              navigate('/', {replace: true});
            }
            // сбросьте стейт, затем в колбэке установите
            // стейт loggedIn родительского App как true,
            // затем перенаправьте его в /diary
          })
          .catch(err => console.log(err));
      }
    
    return (
        <div className='root'>
                <header className="header">
                    <div className="header__logo" />
                    <div className="header__login" />
                </header>
                <div className='login'>
                    <h2 className='register__title' >Вход</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="email" className='register__field-email' placeholder="Email" onChange={handleEmail}/>
                        <input type="password" className='register__field-password' placeholder="Пароль" onChange={handlePassword}/>
                        <button className='register__button'>Войти</button>
                    </form>
                </div>
        </div>
    )
}