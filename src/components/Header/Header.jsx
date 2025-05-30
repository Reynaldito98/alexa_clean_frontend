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
                    <Link to="/store" className={`header__link ${location.pathname==='/store'?'header__link_active':''}`}>Store</Link>
                </li>

                <li>
                    <Link to="/ratings" className={`header__link ${location.pathname==='/ratings'?'header__link_active':''}`}>Ratings</Link>
                </li>

                <li>
                    <Link to="/about" className={`header__link ${location.pathname==='/about'?'header__link_active':''}`}>About</Link>
                </li>

                <li>
                    <button className="header__link">Language</button>
                </li>

                <li>
                    <button className="header__link">Log out</button>
                </li>
            </ul>
        </header>
    )
}

export default Header;