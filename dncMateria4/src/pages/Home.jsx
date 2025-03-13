import Banner from "../components/Banner/Banner";
import Button from "../components/Button/Button";
import Header from "../components/header/Header";
import Hero  from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

function Home(){
    return (
        <>
          <Header/>
          <h1>Home</h1>
          <p>Subtitle</p>
          <Button buttonStyle="secundary" arrow >Ola</Button>
          <div className="container">
              < Hero />
          </div>
          <Footer/>
        </>
    )
}
export default Home;