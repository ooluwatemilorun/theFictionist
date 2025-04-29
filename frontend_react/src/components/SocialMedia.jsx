import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://www.linkedin.com/in/ehianefaith" target="_blank" rel="noopener noreferrer">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/faith.ehianeii" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/faithehiane/" target="_blank" rel="noopener noreferrer">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
