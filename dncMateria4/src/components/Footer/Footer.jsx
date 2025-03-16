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
//import twitter from '../../assets/twitter.svg'

function Footer(){
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
                            <a href="https://www.instagran.com/" target="_blank" >
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
                    <div className ='d-flex mobile-fd-column'>
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
                        <img src={brazilLogo} height="29px" />
                        <img src={usaLogo} height="29px" />
                    </div>
                </div>
                
            </div>

        </footer>
      
    )
}
export default Footer;  //export the component