import { useState, useEffect } from 'react'
import './ProjectsList.css'


// assets
import likedFilled from '../../assets/like_ok.svg'
import like from '../../assets/likeNaoGostei.svg'

//utilis
import { getApiData } from '../../services/apiServices'

function projectsList(props){
    const [projects, setProjects] = useState()

    useEffect(() => {
      const fetchData = async () =>{
        try {
            const projectsResponse = await getApiData(projects)
            setProjects(projectsResponse)
        } catch  {
             setProjects([])
        }
    
    }
       fetchData()
    }, [])

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
                    <img src={like} height="20px" />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb .tertiary-background'></div>
                    <h3>Joao Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={like} height="20px" />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb .tertiary-background'></div>
                    <h3>Joao Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={like} height="20px" />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb .tertiary-background'></div>
                    <h3>Joao Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={like} height="20px" />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb .tertiary-background'></div>
                    <h3>Joao Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={like} height="20px" />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb .tertiary-background'></div>
                    <h3>Joao Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={like} height="20px" />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb .tertiary-background'></div>
                    <h3>Joao Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={likedFilled} height="20px" />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb .tertiary-background'></div>
                    <h3>Joao Silva</h3>
                    <p>BH, Brasil</p>
                    <img src={like}  height="20px"/>
                </div>

           </div>
        </div>
    )
}
export default projectsList;