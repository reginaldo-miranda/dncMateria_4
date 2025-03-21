import { useState, useEffect } from 'react';
import './ContactForm.css'

//components
import Button from '../Button/Button';

function ContactForm(){
    return (
       
           
              <div className="contact-form d-flex fd-column al-center">
                    <h2>We love meeting new people and helping then.</h2>
                     <form>
                            <div className='d-felx form-group'>
                                   <input className="form-input" type='text'  id="name" name="name" placeholder='Name *'/>
                                   <input className="form-input" type='email' id="email" name="email" placeholder='email *'/>
                                   <textarea className="form-input" id="message" name="message" placeholder='Message *' rows="4">

                                   </textarea>
                                   <div>
                                          <Button type='submit' buttonStyle="primary">
                                               Enviar
                                          </Button>      
                                   </div>
                            </div>
                     </form>
              </div>
               
           
        
    )
}
export default ContactForm;