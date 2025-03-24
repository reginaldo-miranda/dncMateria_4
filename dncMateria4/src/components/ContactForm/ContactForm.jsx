import { useState, useEffect } from 'react';
import './ContactForm.css'

//components
import Button from '../Button/Button';

function ContactForm(){
       const [formData, setFormData] = useState({
              name: '',
              email: '' ,
              message:''
       })        
       const [isFormValid, setIsFormValid] = useState(false)

       const handleSubmit = async (e) => {
              
              e.preventDefault()
              if(isFormValid){
                  console.log("valid")
              }
       }

       useEffect(() => {

              const isValidEmail = (email) => {
                     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                     return emailRegex.test(email);
              }

           
               const isValid = formData.name.trim() && 
               formData.email.trim() && 
               isValidEmail(formData.email) &&
               formData.message.trim()
               setIsFormValid(isValid) 
       },[formData])
    
       const handleChange = (e) => {
              const {name, value} = e.target; 
              setFormData({
                     ...formData,
                     [name]: value
              })   
          }

  

    return (
       
           
              <div className="contact-form d-flex fd-column al-center">
                    <h2>We love meeting new people and helping them.</h2>
                     <form onSubmit={handleSubmit}>
                            <div className='d-flex form-group'>
                                   <input className="form-input" 
                                   type='text'
                                   id="name"
                                   name="name"
                                   placeholder='Name *'
                                   onChange={handleChange}
                                   value={formData.name}
                                   />

                                   <input className="form-input"
                                   type='email'
                                   id="email"
                                   name="email"
                                   placeholder='email *'
                                   onChange={handleChange}
                                   value={formData.email}
                                   />

                                 
                            </div>
                            <div className="d-flex form-group">
                                   <textarea className="form-input"
                                   id="message"
                                   name="message"
                                   placeholder='Message *'
                                   rows="4"
                                   onChange={handleChange}
                                   value={formData.message}
                                   />
                                   
                            </div>       

                            <div className='al-center d-flex jc-end form-group'>
                                <Button type='submit' buttonStyle="secundary" 
                                disabled={!isFormValid} >
                                   Enviar
                                </Button>      
                            </div>      
                     </form>
              </div>
               
    )
}
export default ContactForm; 
/*
import { useState, useEffect } from 'react';
import './ContactForm.css';

// Components
import Button from '../Button/Button';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isFormValid, setIsFormValid] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isFormValid) {
            console.log("Formulário enviado com sucesso!", formData);
            // Aqui você pode adicionar a lógica para enviar os dados para um backend
        } else {
            console.log("O formulário não é válido!");
        }
    };

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        const isValid = Boolean(
            formData.name.trim() &&
            formData.email.trim() &&
            isValidEmail(formData.email) &&
            formData.message.trim()
        );

        setIsFormValid(isValid);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="contact-form d-flex fd-column al-center">
            <h2>We love meeting new people and helping them.</h2>
            <form onSubmit={handleSubmit}>
                <div className="d-flex form-group">
                    <input
                        className="form-input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name *"
                        onChange={handleChange}
                        value={formData.name}
                    />

                    <input
                        className="form-input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email *"
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>
                <div className="d-flex form-group">
                    <textarea
                        className="form-input"
                        id="message"
                        name="message"
                        placeholder="Message *"
                        rows="4"
                        onChange={handleChange}
                        value={formData.message}
                    />
                </div>

                <div className="al-center d-flex jc-end form-group">
                    <Button type="submit" buttonStyle="secundary" disabled={!isFormValid}>
                        Enviar
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm; */