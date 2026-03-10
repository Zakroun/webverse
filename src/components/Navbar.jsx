import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isActive = (path) => {
        const currentPath = location.pathname;
        const itemPath = `/${path.toLowerCase().replace(" ", "-")}`;
        return currentPath === itemPath;
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo" onClick={()=>navigate('/')}>
                    ◆ <span>Web</span>Verse
                </div>
                <ul className="navbar-links">
                    {["Our Work", "Services", "About", "Contact"].map((link) => (
                        <li key={link}>
                            <Link 
                                to={`/${link.toLowerCase().replace(" ", "-")}`}
                                className={isActive(link) ? 'active' : ''}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className="navbar-cta">Start Building</button>
                <button 
                    className={`menu-toggle ${isMenuOpen ? 'menu-toggle-open' : ''}`} 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
                    <ul className="mobile-nav-links">
                        {["Our Work", "Services", "About", "Contact"].map((link) => (
                            <li key={link}>
                                <Link 
                                    to={`/${link.toLowerCase().replace(" ", "-")}`} 
                                    onClick={closeMenu}
                                    className={isActive(link) ? 'active' : ''}
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="mobile-nav-cta" onClick={closeMenu}>
                        Start Building
                    </button>
                    <div className="mobile-menu-footer">
                        <p>© 2024 WebVerse</p>
                        <p>Digital Agency</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}