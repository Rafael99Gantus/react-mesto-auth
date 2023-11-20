import React from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    return (
        <div className='root'>
            <div className='page'>
                <header className="header">
                    <div className="header__logo" />
                    <div className="header__sign-up" />
                </header>
                <div className='register'>
                    <h2 className='register__title' >Регистрация</h2>
                    <form>
                        <input type="text" className='register__field-email' placeholder="Email" />
                        <input type="text" className='register__field-password' placeholder="Пароль" />
                        <button className='register__button'>Зарегистрироваться</button>
                    </form>
                    <p className="register__text">Уже зарегистрированы? <Link to="/sign-in" className="register__link">Войти</Link></p>
                </div>
            </div>
        </div>
    )
}