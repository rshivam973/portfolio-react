import { FaHtml5,FaGithub, FaCss3, FaNodeJs, FaReact, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane,FaInstagram, FaLinkedin } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import {BsFillBootstrapFill} from "react-icons/bs"
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
// import { BsMedium } from "react-icons/bs";
// import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/work1.jpg";
import work2 from "./assets/work2.jpg";
import work3 from "./assets/work3.jpg";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.jpg";
import { motion } from 'framer-motion'

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <motion.a href="https://www.instagram.com/shivamrajput3339/" target="_blank">
    <FaInstagram />
  </motion.a>,
  <motion.a href="https://www.linkedin.com/in/shivamrajput3339/" target="_blank">
    <FaLinkedin />
  
  </motion.a>,
  <motion.a href="https://github.com/rshivam973" target="_blank">
    <FaGithub />
  </motion.a>
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Shivam Rajput"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+917500307826"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "rshivam973@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />,<BsFillBootstrapFill/>, <FaReact />, <FaNodeJs />,<SiExpress/>,<SiMongodb/>]

export const educations = [
  {
    id: 1,
    year: "2020-2024",
    position: "ABES Institute Of Technology",
    company: "B.Tech (Computer Science and Engineering)"
  },
  {
    di: 2,
    year: "2019",
    position: "Assisi Convent School, Etah",
    company: "Intermediate"
  },
  {
    id: 3,
    year: "2017",
    position: "Assisi Convent School, Etah",
    company: "High School"
  }
]

export const workImages = [
  {
    id: 1,
    img: work1,
    giturl:"https://github.com/rshivam973/MoviesD",
    deploy:"https://movies-d.vercel.app/",

    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    giturl:"https://github.com/rshivam973/next-portfolio",
    deploy:"https://shivam-codes.vercel.app/",
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    giturl:"https://github.com/rshivam973/MoviesDekho",
    deploy:"https://movies-d.vercel.app/",
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    giturl:"https://github.com/rshivam973/ETHShare",
    deploy:"https://ethshare.netlify.app/",
    name: "project 4",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    giturl:"https://github.com/rshivam973/facebook-phishing-frontend",
    deploy:"https://facebook0-new.netlify.app/",
    name: "project 5",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    giturl:"https://github.com/rshivam973/react-native-weather-app",
    deploy:"https://github.com/rshivam973/react-native-weather-app",
    name: "project 6",
    category: "design"
  }
]


export const workNavs = [
  "All",
  //  "Web", "App", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Crosssing Republik, Ghaziabad"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "rshivam973@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91 7500307826"
  }
]
