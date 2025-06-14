import React from 'react'
import "../assets/css/scrollgallery.css";
import img1 from "../assets/images/home/home_1.jpg";
import img2 from "../assets/images/home/home_2.jpg";
import img3 from "../assets/images/home/home_3.png";
import img4 from "../assets/images/home/home_4.jpeg";
import img5 from "../assets/images/home/home_5.jpeg";
import img6 from "../assets/images/home/home_6.jpg";
import img7 from "../assets/images/home/home_7.jpg";
import img8 from "../assets/images/home/home_8.jpg";

const images = [
   img1,
   img2,
   img3,
   img4,
   img5,
   img6,
   img7,
   img8,
  // Add more image URLs or import them
];

const ScrollGallery = () => {
  return (
    <> 
     <section className="py-5 scroll-gallery" style={{ backgroundColor: "#0a1a26", color: "white" }}>
        <div className="container-fluid">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-start ps-md-5 mb-4 mt-4 me-md-5 pe-md-5">
            <h2 className="text-uppercase ps-md-5">
              FEEL THE <span style={{ color: "#d49b3f" }}>LUXURY</span> <br /> FROM OUR GALLERY
            </h2>
            <button className="btn btn-outline-light fw-bold scroll-gallery-btn">
              <strong>VIEW ALL</strong>
            </button>
          </div>

          {/* Scrolling Gallery */}
          <div className="scroll-gallery-wrapper mb-5">
            <div className="scroll-gallery-track pt-md-5">
              {[...images, ...images].map((src, index) => (
                <div key={index} className="scroll-gallery-item">
                  <img src={src} alt={`Gallery ${index}`} className="img-fluid rounded-0 shadow" style={{height:"380px"}}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    
    </>
  )
}

export default ScrollGallery