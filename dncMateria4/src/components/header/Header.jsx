import {Link} from 'react-router-dom';

//assets
import logo from '../../assets/dnc-logo 2.svg';

function Header(){
    return (
        <div className="header">
            <div className="container al-center d-flex jc-space-between" >
                <Link to="/"><img src={logo} /></Link>
            </div>
        </div>
    )
}
export default Header;  //export the component