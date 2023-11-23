import React, {useRef, useState} from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const successmsg="The information has been shared sucessfully to the owner!!"
  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY);
      toast.success(successmsg);
      e.target.reset();
    } catch (error) {
      toast.error(error.text);
    } finally {
      setLoading(false);
    }
  };




  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>get in touch</span>
            <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Just Say Hi</h3>
          <p className='contact_text'>My door is always open, so feel free to contact!</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                {socialIcon}
              </div>
            )
          })}
          </div>
        </motion.div>

        <form ref={form} onSubmit={sendEmail}>
            
        
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>Get In Touch</h3>
          <div className="row">
            <input type="text" name='user_firstname' placeholder='First Name' />
            <input type="text" name='user_lastname' placeholder='Last name'/>
          </div>
          <div className="row">
            <input type="text" placeholder='Phone' />
            <input type="email" name='user_email' placeholder='Email' />
          </div>
          <div className="row">
            <textarea name='message' placeholder='message'></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn text-white" 
          >
            {loading ? (
              <div className="loader" />
            ) : (
              <input type="submit" value="Send" className='sendtxt'></input>
            )}
          </motion.div>
        </motion.div>
        </form>
        
      </div>
      <ToastContainer />
    </div>
  )
}

export default Contact

