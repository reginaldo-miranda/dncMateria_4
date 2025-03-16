import Banner from "../components/Banner/Banner";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import ProjectsList from "../components/ProjectsList/ProjectsList";

function About(){
    return (
        <>
         <Header/>
          < Banner title="About" image="about.png"/>
          <div className="container">
              -----------
          </div>
          <Footer/>
        </>
    )
}
export default About;