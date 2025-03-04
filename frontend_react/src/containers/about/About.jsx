import React, {useState, useEffect} from 'react';

import {AppWrap} from '../../wrapper';
import {urlFor, client} from '../../client';
import "./About.scss";


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) => setAbouts(data))
  }, []);
  

  return (
    <>
      <h2 className="head-text">
        Meet Me
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <div className='app__profile-item'>
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
            <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About, 'about');