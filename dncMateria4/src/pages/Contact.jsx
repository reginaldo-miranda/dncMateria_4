import Banner from "../components/Banner/Banner";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";

function Contact(){
    return (
        <>
           <Header/>
          < Banner title="Contact" image="contact.svg"/>
          
              <ContactForm />
         
          <Footer/>
        </>
    )
}
export default Contact;