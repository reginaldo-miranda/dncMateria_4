import { useState } from 'react';
import {Link} from 'react-router-dom';

//assets
import './Header.css'
import logo from '../../assets/dnc-logo.svg'

//components
import Button from '../Button/Button';

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <header>
              <div className="container">
                <div className="al-center d-flex jc-space-between">
                <Link to="/"><img src={logo} /></Link>
                <div className="mobile-menu">
                    <Button buttonStyle="secundary"  onClick={toggleMenu}>
                        Menu
                    </Button>
                      
                </div>
                <nav className={`${isMenuOpen ? 'open' : ''}`}>
                    <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={toggleMenu}>
                        X
                    </Button>
                    <ul className="d-flex">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>

        </header>
      
    )
}
export default Header;  //export the component