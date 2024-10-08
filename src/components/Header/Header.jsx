import "./Header.scss";
import logo from "../../assets/images/cfp-logo.png";
import { Link, NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <nav className="header">
            <Link to='/'>
                <img 
                className="header__logo" 
                src={logo} 
                alt="This is cfp logo" 
                />
            </Link>

            <div className="header__link">
                <NavLink to="/gallery">GALLERY</NavLink>
                <NavLink to="/pricing">PRICING</NavLink>
            </div>
        </nav>
    )
}
