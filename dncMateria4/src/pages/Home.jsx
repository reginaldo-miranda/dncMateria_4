import Button from "../components/Button/Button";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";

function Home(){
    return (
        <>
          <Header/>
          <h1>Home</h1>
          <p>Subtitle</p>
          <Button buttonStyle="secundary" arrow >Ola</Button>
          <Footer/>
        </>
    )
}
export default Home;