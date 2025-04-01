import React, { useState, useEffect } from 'react';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const trainingsQuery = '*[_type == "trainings"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(trainingsQuery).then((data) => {
      setTrainings(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Certificates <span>&</span> Experiences</h2>

      <div className="app__skills-container">
        {/* <div className="app__skills-list">
          {skills.map((skill) => (
            <div className="app__skills-item app__flex">
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </div>
          ))}
        </div> */}
        
        <div className="app__training">
          <h2>Trainings</h2>
          {trainings.map((training) => (
            <div
              className="app__training--item"
              key={training.year}
            >
              <div className="app__training--year">
                <p className="bold-text">{training.year}</p>
              </div>
              <div className="app__training--orgs">
                <div className="app__training--org">
                  <h4 className="bold-text">{training.title}</h4>
                  <p className="p-text">{training.org}</p>
                  
                  <p className="p-text">{training.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="app__skills-exp">
        <h2>Experience</h2>
          {experiences.map((experience) => (
            <div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <div className="app__skills-exp-work"
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                    {/* Display description here */}
                    <p className="p-text">{work.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}; 

export default AppWrap(Skills, 'skills');
