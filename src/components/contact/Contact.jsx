import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsTelephone} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_2rqcema', 'template_7e3zora', form.current, 'dnNMN9sv908UDZ8O1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  
      e.target.reset()
      alert('Message hes been sent!')
     
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-item'/>
            <h4>Email</h4>
            <h5>myhamike@gmail.com</h5>
            <a href="mailto:myhamike@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsTelephone className='contact__option-item'/>
            <h4>Call Me</h4>
            <h5>+38-096-077-5433</h5>
            <a href="tel:+38-096-077-5433">Call</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your E-mail' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact