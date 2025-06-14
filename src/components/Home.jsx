import React, { useEffect, useState } from "react";
import video from "../assets/videos/video.mp4";
import aboutImage from "../assets/images/home/aboutimage.png";
import projectImage1 from "../assets/images/home/homedesign_1.jpeg";
import projectImage2 from "../assets/images/home/homedesign_2.jpg";
import projectImage3 from "../assets/images/home/homedesign_3.jpg";
import projectPlan from "../assets/images/home/homestructure.gif";
import "../assets/css/home.css";
import AOS from "aos";
import "aos/dist/aos.css";

import EnquireForm from "./EnquireForm";
import ScrollGallery from "./ScrollGallery";




 const projects = [
  {
    title: "ANTHARA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: projectImage1,
    squareFeet: "647 Sq feet",
    rooms: "03 Rooms",
    price: "1 - 3 Crores",
  },
  {
    title: "VILLARA",
    description: "Spacious layout with modern features, thoughtfully designed interiors, abundant natural light, and premium finishes that redefine luxury living.",
    image: projectImage2,
    squareFeet: "820 Sq feet",
    rooms: "04 Rooms",
    price: "2 - 4 Crores",
  },

  {
    title: "SERENITY",
    description: "A premium gated community with lush green landscapes and smart living features.",
    image: projectImage3,
    squareFeet: "950 Sq feet",
    rooms: "05 Rooms",
    price: "3 - 5 Crores",
  }
 
];


const Home = () => {
  const [count, setCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const target = 75;

  

useEffect(() => {
  AOS.init({ duration: 1000 });

  setCount(0); // show 0 initially

  const delay = 3000;
  const timeout = setTimeout(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) clearInterval(interval);
    }, 20); // Slower counting
  }, delay);

  return () => {
    clearTimeout(timeout);
  };
}, []);


const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}; 

const renderDigitScroller = (number) => {

    const digits = number
    ? number.toString().padStart(2, "0").split("")
   : ["0"]; // Show only one "0" initially
  // const digits = number.toString().padStart(2, "0").split("");

  return (
    <div className="d-flex justify-content-center gap-1">
      {digits.map((digit, idx) => (
        <div className="digit-wrapper" key={idx}>
          <div
            className="digit-scroll"
            style={{
              transform: `translateY(-${parseInt(digit) * 30}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div className="digit" key={i} style={{fontSize:"36px"}}>
                {i}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};



  const stats = [
    { label: "Years of experience" },
    { label: "Projects completed" },
    { label: "Happy customers" },
  ];


  const total = projects.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const current = projects[currentIndex];

  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid">
        <div className="row">
          <div id="videoCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active position-relative" id="video">
                <video
                  className="d-block w-100"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ objectFit: "cover", height: "100vh" }}
                >
                  <source src={video} type="video/mp4" />
                </video>
                <div
                  className="carousel-caption d-flex flex-column justify-content-center align-items-start text-start text-white px-md-5 px-3"
                  style={{ left: "0%", bottom: "0" }}
                >
                  <div className="pt-5 mt-5">
                    <h1 className="display-5 fw-bold home-section-heading" data-aos="fade-in">
                      CRAFTING ARCHITECTURAL <span style={{ color: "#bf7000" }}>ELEGANCE</span>
                    </h1>
                    <p className="w-75 mt-2 home-section-paragraph" data-aos="fade-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmed tempor incididunt ut labore et dolore magna alioua.</p>
                    <button className="btn btn-outline-light px-4 mt-3 mb-5 fw-bold home-carousel-btn" onClick={() => scrollToSection("enquiry-form-section")}>ENQUIRE NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      {/* About Section */}
      <section className="py-5 me-md-5 pe-md-5 mt-md-5">
        <div className="container me-md-5 mt-md-5 pt-md-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 mb-4 mb-md-0 ps-md-0">
              <img src={aboutImage} alt="About" className="img-fluid shadow" data-aos="fade-right" />
            </div>
            <div className="col-12 col-md-7 mt-md-5">
              <h1 className="about mb-3" style={{ color: "#c0832b" }}>
                <span style={{ color: "#bf7000" }}>ABOUT</span>{" "}
                <span className="text-dark">US</span>
              </h1>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <p style={{ fontSize: "0.95rem"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="col-12 col-lg-6">
                    <p style={{ fontSize: "0.95rem"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quis labore sequi dolorum quibusdam veritatis, fugit ducimus sit aut nulla aliquid tenetur eligendi tempora doloremque minus reiciendis velit harum. Hic?</p>
                    <button className="btn mt-3 about-us-btn fw-bold">KNOW MORE</button>
                </div>
              </div>       
          </div>
        </div>
        </div>
      </section>

      
      {/* Stats Section */}
      <section className="container text-center py-5 d-none d-md-block">
        <div className="row">
          {stats.map((item, index) => (
            <div key={index} className={`col-12 col-md-4 border-end border-dark ${index === 2 ? "border-end-0" : ""}`}>
              <div className="counter-box py-3">
                <h1>{renderDigitScroller(count)}</h1>
                <p className="mt-2"><strong>{item.label}</strong></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container text-center py-5 d-block d-md-none">
        <div className="row">
          {stats.map((item, index) => (
            <div key={index} className={`col-12 col-md-4 ${index === 2 ? "border-end-0" : ""}`}>
              <div className="counter-box py-3">
                <h1>{renderDigitScroller(count)}</h1>
                <p className="mt-2">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Projects Section */}
      <section className="py-5 project-head px-5" style={{ backgroundColor: "#0a1a26", color: "white" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-md-4">
            <h2 className="text-uppercase">
              <strong>Projects</strong>
            </h2>
            <button className="btn btn-outline-light mx-4 fw-bold projects-btn">
              <strong>VIEW ALL</strong>
            </button>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4 mt-md-4 px-3">
              <br />
              <br />            
              <h3 className="mb-3 mt-md-2">
                <strong>{current.title}</strong>
              </h3>
              <p>
               {current.description}
              </p>
              <button className="btn btn-outline-light mt-4 fw-bold projects-btn">
                <strong>ENQUIRE NOW</strong>
              </button>
            </div>
            <div className="col-md-4 mt-5">
              <img
                src={current.image}
                alt={current.title}
                className="img-fluid shadow"
                style={{ height: "400px" }}
                data-aos="zoom-in"
              />
            </div>
            <div className="col-md-4 mt-5 px-5">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <h4>
                    <strong>Square Feet</strong>
                  </h4>
                  <p>{current.squareFeet}</p>
                </li>
                <li className="mb-2">
                  <h4>
                    <strong>No. of Rooms</strong>
                  </h4>
                  <p>{current.rooms}</p>
                </li>
                <li className="mb-2">
                  <h4>
                    <strong>Price Range</strong>
                  </h4>
                  <p>{current.price}</p>
                </li>
              </ul>
            </div>        
          </div>
          <div className="d-lg-flex d-md-flex text-center mb-4 px-2 justify-content-end">
              <button className="fw-bold" style={{background: "none", border: "none", color: "white", fontSize: "24px", cursor: "pointer", marginRight:"10px"}} onClick={handlePrev} >
                &#10229;
              </button>
              <button className="fw-bold" style={{background: "none", border: "none", color: "white", fontSize: "24px", cursor: "pointer"}} onClick={handleNext}>
                &#10230;
              </button>
            </div>
        </div>
      </section>


      {/* Customization Section */}
      <section className="py-md-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img src={projectPlan} alt="projectPlan" className="img-fluid" />
            </div>
            <div className="col-md-6 text-center text-md-start px-4 home-structure">
              <h2 className="mb-3" style={{ fontWeight: "bold" }}>
                Tailor Your Dream Home with <span style={{ color: "#c0832b" }}>EIVAA HOMESS</span>
              </h2>
              <p className="mb-4">
                Your Vision, Our Expertise — Experience Bespoke Infrastructure Like Never Before.
              </p>
              <button className="btn dream-btn px-4 fw-bold">START CUSTOMIZING YOUR HOME TODAY</button>
            </div>
          </div>

          <div className="row text-center mt-5">
            <div className="col-md-4 mb-3">
              <p>
                <strong>Personalized Design Consultations</strong>
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <p>
                <strong>Flexible Architectural Adjustments</strong>
              </p>
            </div>
            <div className="col-md-4 mb-lg-3 mb-4">
              <p>
                <strong>Expert Guidance Throughout</strong>
              </p>
            </div>
          </div>
        </div>
      </section>



    <ScrollGallery/> 
    <EnquireForm/>

    </>
  );
};

export default Home;
