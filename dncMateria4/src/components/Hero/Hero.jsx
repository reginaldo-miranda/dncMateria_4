import {Link} from 'react-router-dom'
import './Hero.css'
import Button from '../Button/Button'

function Hero(){
    return (
        <div className="hero d-flex al-center">

           <div className='hero-text'>
        
            <Link>
                <Button buttonStyle="secundary" arrow>
                    Get Started 
                </Button>
            </Link>           
          </div>
        </div>
    )
}
export default Hero