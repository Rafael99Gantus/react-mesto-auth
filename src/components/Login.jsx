import React from 'react';

export default function Login() {
    return (
        <div className='root'>
            <div className='page'>
                <header className="header">
                    <div className="header__logo" />
                    <div className="header__login" />
                </header>
                <div className='login'>
                    <h2 className='register__title' >Вход</h2>
                    <form>
                        <input type="text" className='register__field-email' placeholder="Email" />
                        <input type="text" className='register__field-password' placeholder="Пароль" />
                        <button className='register__button'>Войти</button>
                    </form>
                </div>
            </div>
        </div>
    )
}