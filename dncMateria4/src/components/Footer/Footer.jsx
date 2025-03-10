import {Link} from 'react-router-dom';

//assets
import './Footer.css'
import logo from '../../assets/dnc-logo.svg'
import brazilLogo from '../../assets/brazil-icons.svg'
import usaLogo from '../../assets/usa_icons.svg'
import facebook from '../../assets/facebbok_icons.svg'
import instagran from '../../assets/instagran.svg'
import linkedin from '../../assets/linkdin.svg'
import twitter from '../../assets/twitter.svg'

function Footer(){
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between">
                    <div className="footer-logo-col">
                        <img src={logo} alt="Logo"/>
                        <p className="grey-1-color">A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                        <div className="d-flex social-link">

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
                   
                </div>
                
            </div>

        </footer>
      
    )
}
export default Footer;  //export the component