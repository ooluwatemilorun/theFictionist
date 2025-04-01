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
      {/* <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>🤝</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, Meet</p>
            <h1 className="head-text">Faith Ehiane</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Storyteller</p>
          <p className="p-text">Historian</p>
          <p className="p-text">Cultural Enthusiast</p>
          <p className="p-text">Project Manager</p>
        </div>
      </div> */}

        <div className="header__text">
          <div className="header__greet">
            <span>Hello! meet 🤝</span>
            <h1>Faith Ehiane</h1>
          </div>

          <ul className="header__tag">
            <li> <i class="fa fa-check-square" aria-hidden="true"></i> Historian</li> |
            <li>Storyteller</li>|
            <li>Project Manager</li>|
            <li>Cultural Enthusiast</li>
          </ul>

          {/* <div className="header__tag">
            <p className="header__p">Historian, Storyteller, Project Manager, Cultural Enthusiast</p>
          </div> */}
        </div>

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
