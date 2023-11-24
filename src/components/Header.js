import { Link, Routes, Route } from "react-router-dom";

export default function Header(props) {
    return (
        <header className="header">
            <div className="header__logo" />
            {props.loggedIn ? <div className="header__container">
                <p className="header__email">{props.userEmail}</p>
                <button className="header__exit"><Link to="/sign-in" className="register__link">Выйти</Link></button>
            </div> : ''}
            <Routes>
                <Route path='/sign-up' element={<Link to='/sign-in' className="header__sign-up"></Link>} />
                <Route path='/sign-in' element={<Link to='/sign-up' className="header__login" />} />
            </Routes>
        </header>
    )
}