import Banner from "../components/Banner/Banner";
import Button from "../components/Button/Button";
import Header from "../components/header/Header";
import Hero  from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import ProjectsList from "../components/ProjectsList/ProjectsList";


function Home(){
    return (
        <>
          <Header/>
          <div className="container">
              < Hero />
              <ProjectsList />
          </div>
          <Footer/>
        </>
    )
}
export default Home;