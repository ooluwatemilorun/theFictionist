import React from 'react'
import { motion} from 'framer-motion'; 
import {AppWrap} from '../../wrapper';
import { images } from '../../constants';
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const links = [
  'https://www.facebook.com/faith.ehianeii',
  'https://www.instagram.com/faithehiane/',
  'https://www.linkedin.com/in/ehianefaith',
];

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="header__text">
        <span>Hello! meet 🤝</span>
        <h1>Faith Ehiane</h1>
      </div>

      <ul className="header__tag">
        <li> <i class="fa fa-check-square" aria-hidden="true"></i> Historian</li> |
        <li>Storyteller</li>|
        <li>Project Manager</li>|
        <li>Cultural Enthusiast</li>
      </ul>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.personal} alt="profile_bg" className='profile_img'/>
      {/* <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      /> */}
    </motion.div>

    {/* <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >

{[images.facebook, images.instagram, images.linkedin].map((circle, index) => (
  <div className='circle-cmp app__flex' key={`circle-${index}`}>
    <a href={links[index]} target="_blank" rel="noopener noreferrer">
      <img src={circle} alt={`circle-${index}`} />
    </a>
  </div>
))}

    </motion.div> */}
  </div>
);

export default AppWrap(Header, 'home');
