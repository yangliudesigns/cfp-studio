import "./Header.scss";
import logo from "../../assets/images/cfp-logo.ong";
import { Link } from 'react-router-dom';


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
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/pricing">Pricing</NavLink>
            </div>
        </nav>
    )
}
