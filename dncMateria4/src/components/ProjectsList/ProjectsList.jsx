import { useState, useEffect } from 'react'
import './ProjectsList.css'


// assets
import likedFilled from '../../assets/like_ok.svg'
import like from '../../assets/likeNaoGostei.svg'

//utilis
import { getApiData } from '../../services/apiServices'
import Projects from '../../pages/Projects.jsx'

function projectsList(){
    const [projects, setProjects] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
            const projectsResponse = await getApiData('projects')
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
              {
                projects ?
                    projects.map((project) => (
                      <div key={project.id} className="project-card d-flex jc-center al-center fd-column">
                          <div 
                              className='thumb tertiary-background' 
                              style={{ backgroundImage: `url(${project.thumb || ''})` }}
                          ></div>
                          <div>
                              <h3>{project.title}</h3>  
                              <p>{project.subtitle}</p>
                              <img src={likedFilled} height="20px" alt="Like" />
                          </div>  
                      </div>
                     ))
                  : 
                  null
               }
              
           </div>
        </div>
    )
}
export default projectsList;






//-----------------------------
/*function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const projectsResponse = await getApiData('projects');
              setProjects(projectsResponse);
          } catch {
              setProjects([]);
          }
      };
      fetchData();
  }, []);

  return (
      <div className="project-section">
          <div className='project-hero'>
              <h2>Follow Our Projects</h2>
              <p>It is a long established fact that a reader will be distracted by the of readable content of page looking at its layout points.</p>
          </div>
          <div className='project-grid'>
              {projects.length > 0 ? (
                  projects.map((project) => (
                      <div key={project.id} className="project-card d-flex jc-center al-center fd-column">
                          <div 
                              className='thumb tertiary-background' 
                              style={{ backgroundImage: `url(${project.thumb || ''})` }}
                          ></div>
                          <div>
                              <h3>{project.title}</h3>  
                              <p>{project.subtitle}</p>
                              <img src={likedFilled} height="20px" alt="Like" />
                          </div>  
                      </div>
                  ))
              ) : (
                  <p>No projects available.</p>
              )}
          </div>
      </div>
  );
}

export default ProjectsList;



//--------------------------
*/