import React, { useState } from 'react';
import './Scribble.css';
import img1 from '../../../images/Gallery/ScribbleDay/img1.jpg';
import img2 from '../../../images/Gallery/ScribbleDay/img2.jpg';
import img3 from '../../../images/Gallery/ScribbleDay/img3.jpg';
import img4 from '../../../images/Gallery/ScribbleDay/img4.jpg';
import img5 from '../../../images/Gallery/ScribbleDay/img5.jpg';
import img6 from '../../../images/Gallery/ScribbleDay/img6.jpg';
import img7 from '../../../images/Gallery/ScribbleDay/img7.jpg';
import img8 from '../../../images/Gallery/ScribbleDay/img8.jpg';
import img9 from '../../../images/Gallery/ScribbleDay/img9.jpg';
import img10 from '../../../images/Gallery/ScribbleDay/img10.jpg';


const images = [
  // 'https://imagizer.imageshack.com/v2/150x100q70/924/cRIuic.png',
  // 'https://imagizer.imageshack.com/v2/150x100q70/923/kdwHEW.png'
  // // Add other image URLs here
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10
];

const Scribble = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openImage = (index) => {
    setSelectedImageIndex(index);
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
  };

  const navigateImage = (step) => {
    const newIndex = selectedImageIndex + step;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImageIndex(newIndex);
    }
  };

  return (
    <div >

      <div className='top-header'>
        <div className='content'>
          <h2>Scribble Day</h2>
          <h2>Scribble Day</h2>
        </div>
        {/* <div className='exordium-paragraph'>
          <p>This is the Exordium paragraph.</p>
        </div> */}
      </div>


      <div className="gcontainer">
        <div className="gallery">
          {images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Image ${index}`}
              onClick={() => openImage(index)}
            />
          ))}
        </div>
      </div>
      {isImageOpen && (
        <div className="overlay">
          <span className="close-btn" onClick={closeImage}>
            &times;
          </span>
          <div className="image-popup">
            <img
              src={images[selectedImageIndex]}
              alt={`Image ${selectedImageIndex}`}
            />
            <div className="nav-btns">
              <button onClick={() => navigateImage(-1)} disabled={selectedImageIndex === 0}>
                &lt; Prev
              </button>
              <button onClick={() => navigateImage(1)} disabled={selectedImageIndex === images.length - 1}>
                Next &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scribble;
