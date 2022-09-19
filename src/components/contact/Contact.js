import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gqvb8wj', 'template_usftwjc', form.current, '_1VEMIKutuET4xB4r')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section>
      <div className='container'>
        <div className='text-center'>
          <h2 className='title'>We’d Love to Hear from You</h2>
          <p>Your thoughtful suggestions and sincere feedback is important to us. Please, feel free <br></br> to let us know anything you have in your mind.</p>
        </div>

        <div style={{padding:'5rem 0'}} className='p-relative'>
            <div className='circle'></div>
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <label>Name </label>
                <input type='text' name="user_name" placeholder='your name' />
              </div>
              <div>
                <label>Email </label>
                <input type='email' name="user_email" placeholder='your email address' />
              </div>
              <div>
                <label>Subject </label>
                <input type='text' name='user_subject' placeholder='your subject ' />
              </div>
              <div>
              <label>Message </label>
                <textarea name="message" placeholder='what can we help you ?'></textarea>
              </div>
              <div>
              <input className='btn' type="submit" value="Submit" />
                
              </div>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
