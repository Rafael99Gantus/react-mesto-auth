import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import * as Auth from '../utils/Auth.jsx';

export default function Register(props) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        Auth.register(formValue.email, formValue.password).then((res) => {
            navigate('/sign-in', {replace: true});})
    }

    return (
        <div className='root'>
                <header className="header">
                    <div className="header__logo" />
                    <div className="header__sign-up" />
                </header>
                <div className='register'>
                    <h2 className='register__title' >Регистрация</h2>
                    <form onSubmit={handleSubmit} >

                        <input type="email"
                            className='register__field-email'
                            placeholder="Email"
                            value={formValue.email}
                            onChange={handleChange} />

                        <input type="password"
                            className='register__field-password'
                            placeholder="Пароль"
                            value={formValue.password}
                            onChange={handleChange} />

                        <button className='register__button' onSubmit={handleSubmit}>Зарегистрироваться</button>
                    </form>
                    <p className="register__text">Уже зарегистрированы? <Link to="/sign-in" className="register__link">Войти</Link></p>
                </div>
        </div>
    )
}