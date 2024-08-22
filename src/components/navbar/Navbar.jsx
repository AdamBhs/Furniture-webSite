import "./navStyle.css"
import logo from "../../assets/pictures/logo.png"
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [activeLink, setActiveLink] = useState("/");

    const handleNavLinkClick = (to) => {
        setActiveLink(to);
    }

    return (
        <div className="header">
            <nav className="container-global">
                <Link exact to="/"> 
                <div className="logo" onClick={() => handleNavLinkClick('/')}>
                    <img src={logo} alt="logo" />
                    <h3>Lalasia</h3>
                </div>
                </Link>
                <div className="links">
                    <ul>
                        
                            <li className={`${activeLink === '/product' ? 'activeLink': ''}`} 
                                onClick={() => handleNavLinkClick('/product')}>
                                <Link to="/product">
                                Product
                                </Link>
                            </li>
                       
                        
                            <li className={`${activeLink === '/service' ? 'activeLink': ''}`}
                                onClick={() => handleNavLinkClick('/service')}>
                                <Link to="/service">
                                    Service
                                </Link>
                            </li>
                        
                        
                            <li className={`${activeLink === '/article' ? 'activeLink': ''}`}
                                onClick={() => handleNavLinkClick('/article')}>
                                <Link to="/article">
                                    Article
                                </Link>
                            </li>
                        
                        
                            <li className={`${activeLink === '/about' ? 'activeLink': ''}`}
                                onClick={() => handleNavLinkClick('/about')}>
                                <Link to="/about">
                                    About Us
                                </Link>
                            </li>
                        
                    </ul>
                </div>

                <div className="user-bag">
                    <IoBagOutline className="icon"/>
                    <IoPersonOutline className="icon"/>
                </div>  
            </nav>
        </div>
    )
}
export default Navbar;
