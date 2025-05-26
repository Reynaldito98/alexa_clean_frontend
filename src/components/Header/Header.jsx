import './Header.css';
import logo from '../../images/logo.jpeg';
import {Link, useLocation} from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
        <header className={`header ${location.pathname!=='/'?'header_background_black':''}`}>
            <div></div>

            <ul className="header__right-column">
                <li>
                    <Link to="/" className={`header__link ${location.pathname==='/'?'header__link_active':''}`}>Home</Link>
                </li>

                <li>
                    <Link to="/info-center" className={`header__link ${location.pathname==='/info-center'?'header__link_active':''}`}>Info Center</Link>
                </li>

                <li>
                    <Link to="/about" className={`header__link ${location.pathname==='/about'?'header__link_active':''}`}>About</Link>
                </li>

                <li>
                    <Link to="/contact" className={`header__link ${location.pathname==='/contact'?'header__link_active':''}`}>Contact</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;