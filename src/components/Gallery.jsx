import React from 'react'
import { useEffect } from "react";
import "../assets/css/gallery.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../assets/images/gallery/gallery_1.jpg";
import img2 from "../assets/images/gallery/gallery_2.jpg";
import img3 from "../assets/images/gallery/gallery_3.jpg";
import img4 from "../assets/images/gallery/gallery_4.jpg";
import img5 from "../assets/images/gallery/gallery_5.jpg";
import img6 from "../assets/images/gallery/gallery_6.jpeg";
import img7 from "../assets/images/gallery/gallery_7.jpeg";
import img8 from "../assets/images/gallery/gallery_8.jpeg";
import img9 from "../assets/images/gallery/gallery_9.jpg";
import img10 from "../assets/images/gallery/gallery_10.jpg";
import img11 from "../assets/images/gallery/gallery_11.jpg";

const Gallery = () => {

    useEffect(() => {
      AOS.init({
        duration: 1000, 
        easing: 'ease-in-out',
        once: true,
         
      });
    }, []);

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}; 

  return (
    <>
        <section>
            <div className="gallery-section text-white d-flex align-items-end">
                <div className="container text-start ps-4"> 
                    <div data-aos="fade-up" data-aos-delay="200">                
                        <h1 className="display-4 fw-bold">EXPERIENCE THE BEAUTY<br /><span>OF </span><span style={{ color: "#bf7000" }}>OUR CRAFTSMANSHIP</span></h1>
                        <p className="lead mt-3 fw-bold gallery-paragraph" >EIVAA HOMESS BRINGS YOUR VISION TO LIFE WITH<br />TAILOR-MADE ARCHITECTURAL EXCELLENCE.</p>
                    </div>
                        <button className="btn btn-outline-light mt-3 fw-bold gallery-carousel-btn" onClick={() => scrollToSection("project-section")}>VIEW OUR LATEST PROJECTS</button>   
                </div>
            </div>
        </section>

        <section className="porfolio-section py-5" style={{ backgroundColor: "#fdf9f2" }} id="project-section">
            <div className="container">
                <h2 className="text-center mb-5 mt-5 pb-4 fw-bold portfolio-title">DISCOVER OUR PORTFOLIO</h2>
                <div className="row g-4">
                {/* Left Large Image */}
                    <div className="col-12 col-md-4 d-flex flex-column gap-3">
                        <img
                        src={img1}
                        alt="img1"
                        className="img-fluid w-100 h-100 object-fit-cover"
                        data-aos="fade-up" data-aos-delay="100"/>
                         <img
                        src={img2}
                        alt="img2"
                        className="img-fluid w-100 h-100 object-fit-cover"
                        data-aos="fade-up" data-aos-delay="200"/>

                        
                    </div>

                    {/* Middle Tall Image */}
                    <div className="col-12 col-md-4 d-flex flex-column gap-3">
                        <img
                        src={img3}
                        alt="img3"
                        className="img-fluid w-100 h-100 object-fit-cover"
                        data-aos="fade-up" data-aos-delay="300"/>
                         <img
                        src={img6}
                        alt="img6"
                        className="img-fluid w-100 h-100 object-fit-cover"
                        data-aos="fade-up" data-aos-delay="400"/>
                    </div>

                    {/* Right Top & Bottom Small Images */}
                    <div className="col-12 col-md-4 d-flex flex-column gap-3">
                        
                            <img
                                src={img4}
                                alt="img4"
                                className="img-fluid w-100 h-100 object-fit-cover"
                            data-aos="fade-up" data-aos-delay="500"/>
                            <img
                                src={img5}
                                alt="img5"
                                className="img-fluid w-100 h-100 object-fit-cover"
                            data-aos="fade-up" data-aos-delay="600"/>
                                          
                    </div>
                    
                </div>
                <div className="row g-4 mb-3 pt-3">
                    <div className="col-12 col-md-8">
                        <img src={img7} className="img-fluid w-100 h-100 object-fit-cover" alt="img7" data-aos="fade-up" data-aos-delay="700"/>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src={img8} className="img-fluid w-100 h-100 object-fit-cover" alt="img8" data-aos="fade-up" data-aos-delay="800"/>
                    </div>
                    
                </div>
                 <div className="row g-3 mb-4 g-4">
                    <div className="col-12 col-md-4">
                        <img src={img9} className="img-fluid w-100 h-100 object-fit-cover" alt="img9" data-aos="fade-up" data-aos-delay="900"/>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src={img10} className="img-fluid w-100 h-100 object-fit-cover" alt="img10" data-aos="fade-up" data-aos-delay="1000"/>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src={img11} className="img-fluid w-100 h-100 object-fit-cover" alt="img11" data-aos="fade-up" data-aos-delay="1100"/>
                    </div>
                </div>

                <div className="text-center pt-4">
                    <button className="btn portfolio-btn px-4 py-2 fw-bold">LOAD MORE</button>
                </div>


            </div>
        </section>

    </>
  )
}

export default Gallery