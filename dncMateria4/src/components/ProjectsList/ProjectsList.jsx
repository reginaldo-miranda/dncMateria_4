import './ProjectsList.css'

// assets
import likedFilled from '../../assets/like_ok.svg'
import like from '../../assets/likeNaoGostei.svg'



function projectsList(props){
    return (
        <div className="project-section">

           <div className='project-hero'>
              <h2>Follow Our Projects</h2>
              <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points. </p>
           </div>
           <div className='project-grid'>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb .tertiary-background'></div>
                    <h3>Joao Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={like} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb .tertiary-background'></div>
                    <h3>Joao Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={like} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb .tertiary-background'></div>
                    <h3>Joao Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={like} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb .tertiary-background'></div>
                    <h3>Joao Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={like} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb .tertiary-background'></div>
                    <h3>Joao Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={like} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb .tertiary-background'></div>
                    <h3>Joao Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={like} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb .tertiary-background'></div>
                    <h3>Joao Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={like} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb .tertiary-background'></div>
                    <h3>Joao Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={like} />
                </div>

           </div>
        </div>
    )
}
export default projectsList;