import { useContext } from 'react';
import {Link} from 'react-router-dom';

//assets
import './Footer.css'
import logo from '../../assets/dnc-logo.svg'
import brazilLogo from '../../assets/brazil-icons.svg'
import usaLogo from '../../assets/usa_icons.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'

import linkedin from '../../assets/linkedin.svg'
import twitter from '../../assets/twitter.svg'

//context
import { AppContext } from '../../contexts/AppContext';
import Button from '../Button/Button';

function Footer(){
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }

    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                   
                        <img src={logo} className='footer-logo' alt="Logo"/>
    
                         <p className="grey-1-color">
                            {appContext.languages[appContext.language].general.footerLogoText } 
                         </p>
                     
                        <div className=" social-links">

                             <a href="https://www.facebook.com/" target="_blank" > 
                                 <img src={facebook}/>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" >
                                <img src={instagram}/>
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
                            <h3>{appContext.languages[appContext.language].general.pages }</h3>
                            <ul>
                               <li><Link to="/">{appContext.languages[appContext.language].menu.home }</Link></li>
                               <li><Link to="/about">{appContext.languages[appContext.language].menu.about } </Link></li>
                               <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects }</Link></li>
                               <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact }</Link></li>
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
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}>
                              <img src={brazilLogo} height="29px" alt="Português (Brasil)"/>
                        </Button>
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')} >
                              <img src={usaLogo} height="29px" alt="English (US)" />
                        </Button>
                     
                    </div>
                </div>
                
            </div>

        </footer>
      
    )
}
export default Footer;  //export the component 

 //   {appContext.languages[appContext.language].general.footerLogoText} 
