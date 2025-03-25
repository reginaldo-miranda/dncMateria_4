/* import { useContext } from 'react';
import {Link} from 'react-router-dom';

//assets
import './Footer.css'
import logo from '../../assets/dnc-logo.svg'
import brazilLogo from '../../assets/brazil-icons.svg'
import usaLogo from '../../assets/usa_icons.svg'
import facebook from '../../assets/facebook.svg'
import instagran from '../../assets/instagran.svg'
import linkedin from '../../assets/linkdin.svg'
import twitter from '../../assets/twitter.svg'

//context
import { AppContext } from '../../contexts/AppContext';
import Button from '../Button/Button';

function Footer(){
    const appContext = useContext(AppContext)
    const changelanguage = (country) => {
        appContext.setLanguage(country)
    }
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={logo} className='footer-logo' alt="Logo"/>
                        <p className="grey-1-color">A escola que prepara você para as profissões em 
                         alta no mercado de trabalho.</p>
                        <div className=" social-links">

                             <a href="https://www.facebook.com/" target="_blank" >
                                 <img src={facebook}/>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" >
                                <img src={instagran}/>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" >
                               <img src={linkedin}/>
                            </a>
                            <a href="https://www.twitter.com/" target="_blank" >
                                <img src={twitter}/>
                            </a>
                         </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                         <div className="footer-col">
                            <h3>Pages</h3>
                            <ul>
                               <li><Link to="/">Home</Link></li>
                               <li><Link to="/about">About</Link></li>
                               <li><Link to="/projects">Projects</Link></li>
                               <li><Link to="/contact">Contact</Link></li>
                            </ul>
                         </div>
                            <div className='footer-col'>
                               <h3>Contact</h3>
                               <p className='grey-1-color'>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p> 
                               <p className='grey-1-color'>suporte@escoladnc.com.br</p>
                               <p className='grey-1-color'>(19) 99187-4342</p>
                            </div>
                    </div>
                   
                </div>
                <div className='d-flex jc-space-between footer-copy'>
                    <p className='grey-1-color'>Copyright © DNC - 2024</p>
                    <div className='langs-area d-flex'>
                        <Button buttonStyle="unstyled" onClick={() => changelanguage('br')}>
                              <img src={brazilLogo} height="29px" />
                        </Button>
                        <Button buttonStyle="unstyled" onClick={() => changelanguage('en')} >
                              <img src={usaLogo} height="29px" />
                        </Button>
                     
                    </div>
                </div>
                
            </div>

        </footer>
      
    )
}
export default Footer;  //export the component */

import { useContext } from 'react';
import { Link } from 'react-router-dom';

// Assets
import './Footer.css';
import logo from '../../assets/dnc-logo.svg';
import brazilLogo from '../../assets/brazil-icons.svg';
import usaLogo from '../../assets/usa_icons.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';

// Context
import { AppContext } from '../../contexts/AppContext';
import Button from '../Button/Button';

function Footer() {
    const appContext = useContext(AppContext);

    const changeLanguage = (country) => {
        appContext.setLanguage(country);
    };

    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={logo} className="footer-logo" alt="Logo DNC" />
                        <p className="grey-1-color">
                            A escola que prepara você para as profissões em alta no mercado de trabalho.
                        </p>
                        <div className="social-links">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="Instagram" />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="LinkedIn" />
                            </a>
                            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="Twitter" />
                            </a>
                        </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>Pages</h3>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>Contact</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p> 
                            <p className="grey-1-color">suporte@escoladnc.com.br</p>
                            <p className="grey-1-color">(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color">Copyright © DNC - 2024</p>
                    <div className="langs-area d-flex">
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}>
                            <img src={brazilLogo} height="29px" alt="Português (Brasil)" />
                        </Button>
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')}>
                            <img src={usaLogo} height="29px" alt="English (US)" />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;