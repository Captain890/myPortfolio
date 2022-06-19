import React,{useState,useRef} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_73ww6tg', 'template_pm7ldn4', form.current, '6R05oSdwJRlxYbEz1')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="c-awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className="blur a-blur"
                 style={{ background:'#ABF1FF94' }}>
                </div>
            </div>
        </div>
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail} >
            <input type="text" name='user_name' className='user' placeholder='Name' />
            <input type="email" name='user_email' className='user' placeholder='Email' />
            <textarea name="message" className='user' placeholder='Message' />
            <input type="submit" value='Send' className='button' />
            <span>{done && 'Thanks for contacting me!'}</span>
            <div className="blur c-blur1"
                 style={{ background:'var(--purple)' }}>
                </div>
          </form>
        </div>
    </div>
  )
}

export default Contact;