import { useContext } from 'react';
import { useState, useEffect } from 'react'
import './ProjectsList.css'


// assets
import likedFilled from '../../assets/like_ok.svg'
import like from '../../assets/likeNaoGostei.svg'

//components
import Button from '../Button/Button';

//utilis
import { getApiData } from '../../services/apiServices'
import Projects from '../../pages/Projects.jsx'

//context
import { AppContext } from '../../contexts/AppContext';

function projectsList(){
    const appContext = useContext(AppContext)
    const [projects, setProjects] = useState([])
    const [favProjects , setFavProjects] = useState([])

    const saveFavProjects = (id) => {
        setFavProjects((prevFavProjects) => {
            if(prevFavProjects.includes(id)){
                const filterArray = prevFavProjects.filter((project) => project !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProjects.filter((projectId) => projectId !== id)
            } else{
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                return [...prevFavProjects, id]
            }

        })
    }

    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }

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

    useEffect(() => {
        const saveFavProjects = JSON.parse( sessionStorage.getItem('favProjects'))
        if(saveFavProjects) {
            setFavProjects(saveFavProjects)
        }
       
    }, [])

    return (
        <div className="project-section">

           <div className='project-hero'>
              <h2>{ appContext.languages[appContext.language].projects.title } </h2>
            
              <p>{appContext.languages[appContext.language].projects.subtitle } </p>
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

                              <Button buttonStyle="unstyled" onClick={() => saveFavProjects(project.id)}>
                                    <img src={favProjects.includes(project.id) ? likedFilled : like } height="20px" alt="Like" />
                              </Button>
                              
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