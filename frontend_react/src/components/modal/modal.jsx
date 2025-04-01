import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { client, urlFor } from '../../client';
import './Modal.css';

const Modal = ({ work, onClose }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (work) {
      // Fetch testimonials that match the work's title
      const query = `*[_type == "testimonials" && workTitle == "${work.title}"]`;

      client.fetch(query).then((data) => {
        setTestimonials(data);
      });
    }
  }, [work]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  if (!work) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <img src={urlFor(work.imgUrl)} alt={work.title} className="modal-image" />
        <h2 className='modal__title'>{work.title}</h2>
        <p className='modal__description'>{work.description}</p>
        <a href={work.projectLink} className='modal__link' target="_blank" rel="noreferrer">Visit Link</a>

        {work?.testimonials && work.testimonials.length > 0 ? (
          <div className="testimonials__section">
            <h3>What People Say About This</h3>
            <div className="testimonial__slider">
              <button className="nav-btn left" onClick={handlePrev}><HiChevronLeft /></button>
              
              <div className="testimonial__item">
                {work.testimonials[currentIndex] && ( // Ensure the testimonial exists before rendering
                  <>
                    <img
                      src={work.testimonials[currentIndex].imgurl ? urlFor(work.testimonials[currentIndex].imgurl) : '/default-image.png'}
                      alt={work.testimonials[currentIndex]?.name || 'Anonymous'}
                    />
                    <div className="item__testimony">
                      <p>{work.testimonials[currentIndex]?.feedback || 'No feedback available'}</p>
                      <h4>{work.testimonials[currentIndex]?.name || 'Unknown'}</h4>
                      <h5>{work.testimonials[currentIndex]?.company || ''}</h5>
                    </div>
                  </>
                )}
              </div>

              <button className="nav-btn right" onClick={handleNext}><HiChevronRight /></button>
            </div>
          </div>
        ) : (
          <p>No testimonials available.</p>
        )}

      </div>
    </div>
  );
};

export default Modal;
