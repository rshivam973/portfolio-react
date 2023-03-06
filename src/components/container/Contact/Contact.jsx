import React, {useRef} from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();
  const successmsg="The information has been shared sucessfully to the owner!! You will receive a confirmation mail shortly."
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          alert(successmsg);
      }, (error) => {
          alert(error.text);
      });
      e.target.reset();
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
            className="btn" 
          >
            {/* <a href="#">Send</a> */}
            <input type="submit" value="Send" className='sendtxt'></input>
          </motion.div>
        </motion.div>
        </form>
        
      </div>
    </div>
  )
}

export default Contact








// <!-- Include EmailJS library -->
// <script src="https://cdn.emailjs.com/dist/email.min.js"></script>

// <!-- Create your form -->
// <form id="my-form">
//   <input type="text" name="name" placeholder="Name" required>
//   <input type="email" name="email" placeholder="Email" required>
//   <textarea name="message" placeholder="Message" required></textarea>
//   <button type="submit">Send</button>
// </form>

// <!-- Initialize EmailJS with your user ID -->
// <script>
//   (function(){
//     emailjs.init('YOUR_USER_ID');
//   })();
// </script>

// <!-- Add event listener to form submission -->
// <script>
//   document.getElementById('my-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission behavior
//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
//       .then(function(response) {
//         console.log('SUCCESS!', response.status, response.text);
//       }, function(error) {
//         console.log('FAILED...', error);
//       });
//       this.reset(); // Clear form data after submission
//   });
// </script>
