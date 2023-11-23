import React from 'react'
import ProfilePic from "../../../assets/ProfilePic.jpg"
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile">
        <img src={ProfilePic} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className='name'>Hi, I'm <span>Shivam Rajput</span> </h3>
        <span className='job'>Full Stack Developer</span>
        <span className='text'>Passionate<br /> to create innovative <br />  web applications.</span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants} 
          animate="animation"
        >
          connect with me</motion.a>
        <div
          className="web"

        >
          Android Developer
        </div>
        <div
          className="ui"
        >
          Web Developer
        </div>
        <div
          className="freelance"
        >
          Problem Solver
        </div>
      </div>
    </motion.div>
  )
}

export default Home