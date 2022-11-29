import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {
    debugger
    return (
        <header className={s.header}>
            <img src={'https://assets-global.website-files.com/5e3177cecf36f6591e4e38cb/5ea2a86505e63bdd814cf868_Logo.png'}></img>
            <div className={s.loginBlock}>
            { props.isAuth ? props.login
               : <NavLink to={'/login'}>Login</NavLink> }

            </div>
        </header>
    )
} 

export default Header;