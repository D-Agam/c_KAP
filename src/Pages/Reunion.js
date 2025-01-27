import React, { useState } from 'react';
import './Reunion.css';
import img1 from '../images/Gallery/Exordium/DSC_0009 (1).png';
import img2 from '../images/Gallery/Exordium/DSC_0186.png';
import img3 from '../images/Gallery/Exordium/DSC_0838 - Copy.png';
import img4 from '../images/Gallery/Exordium/DSC_0891.png';
import img5 from '../images/Gallery/Exordium/DSC_0904.png';
import img6 from '../images/Gallery/Exordium/DSC_0934 (1).png';
import img7 from '../images/Gallery/Exordium/DSC_0966.png';
import img8 from '../images/Gallery/Exordium/DSC_0970.png';
import img9 from '../images/Gallery/Exordium/IMG_4450.png';
import img10 from '../images/Gallery/Exordium/IMG_4470 - Copy.png';



const images = [

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

const Reunion = () => {
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
    <div className='reunion-container'>
      <div className='reunion-background'>
      <div className='reunion-overlay'>
        <div className='reunion-descrition'>
          <h1 className='reunion-descrition-h1'>Reunion</h1>
          <p className='reunion-descrition-p'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
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

export default Reunion;

