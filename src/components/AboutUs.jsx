import React, { useEffect, useState } from "react";
import EnquireForm from "./EnquireForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/aboutus.css";

import video from "../assets/videos/dreamhouse.mp4";
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../assets/images/about/plan.jpg";
import img2 from "../assets/images/about/conceptdesign.jpg";
import img3 from "../assets/images/about/craftsmanship.jpg";
import img4 from "../assets/images/about/handshake.jpg";
import architectvision from "../assets/images/about/architectvision.jpg";



const AboutUs = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

    
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

const steps = [
  {
    title: "Initial Planning",
    image: img1,
    description:"We begin by understanding your aspirations, preferences, and lifestyle. Our team collaborates with you to translate your ideas into a clear vision for your dream home."
  },
  {
    title: "Concept Design",
    image: img2,
    description:"Our architects create initial sketches and concept designs. With your feedback, we refine the design to ensure it captures your vision while maintaining architectural brilliance."
  },
  {
    title: "Execution and Craftsmanship",
    image: img3,
    description:"Once the design is finalized, our expert builders and craftsmen bring the concept to life using premium materials. Every detail is meticulously executed with quality assurance."
  },
  {
    title: "Handover & Beyond",
    image: img4,
    description:"Upon completion, we conduct a detailed walkthrough to ensure every aspect meets your expectations. Even after handover, we remain committed to providing support and ensuring your continued satisfaction."
  }
];





  return (
    <>    
      {/* Hero Section */}
        <section>
            <div className="about-us-section text-white d-flex align-items-end">
                <div className="container text-start ps-4"> 
                    <div data-aos="fade-up" data-aos-delay="200">                
                        <h1 className="display-4 fw-bold">DESIGNING DREAMS,<br /><span>BUILDING </span><span style={{ color: "#bf7000" }}>LEGACIES.</span></h1>
                        <p className="lead mt-3 fw-bold about-us-paragraph" >EIVAA HOMESS BRINGS YOUR VISION TO LIFE WITH<br />TAILOR-MADE ARCHITECTURAL EXCELLENCE.</p>
                    </div>
                        <button className="btn btn-outline-light mt-3 fw-bold about-us-carousel-btn" onClick={() => scrollToSection("discover-section")}>DISCOVER OUR STORY</button>   
                </div>
            </div>
        </section>
        <section>
        <div className="container py-5" id="discover-section">
            <div className="row position-relative">
                <div className="col-lg-6">
                    <div className="video-wrapper position-relative">
                        <video className="w-100 pt-5 mt-5" autoPlay loop muted playsInline style={{objectFit:"cover",height:"650px", maxWidth:"650px"}} data-aos="fade-right" data-aos-delay="200">
                        <source src={video} type="video/mp4"/>
                        </video>
                        <button className="btn btn-light position-absolute video-button rounded-0 bottom-0 start-0 mb-2">
                            <strong className="bi bi-play-circle-fill fs-4"><span className="ms-2" style={{fontSize:"18px"}}>WATCH VIDEO</span></strong>
                        </button>
                    </div>
                </div>

                <div className="col-md-6 d-none d-lg-block position-absolute top-50 end-0 translate-middle-y pe-md-5 pb-5" style={{width:"750px"}}>
                    <div className="bg-white p-4 shadow rounded pb-5">
                        <div data-aos="fade-up" data-aos-delay="200">
                            <small className="text-uppercase text-muted">Welcome to EIVAA HOMESS</small>
                            <h1 className="fw-bold mt-2 dreams-head">TAILOR YOUR <span style={{ color: "#bf7000" }}>DREAM HOME</span><br/>WITH US</h1>
                            <p className="mt-3 text-muted">
                                    At EIVAA HOMESS, we understand that every home is a reflection of its owner.
                                    Our personalized design solutions are crafted to align with your unique vision
                                    and lifestyle. Whether you have a specific layout in mind, desire luxurious
                                    finishes, or wish to integrate eco-friendly elements, our expert team will ensure
                                    your dream home becomes a reality. Experience bespoke living spaces where comfort,
                                    style, and functionality come together effortlessly.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 d-block d-lg-none mt-4">
                    <div className="bg-white p-4 shadow rounded pb-5">
                        <small className="text-uppercase text-muted">Welcome to EIVAA HOMESS</small>
                        <h1 className="fw-bold mt-2 dreams-head">TAILOR YOUR <span style={{ color: "#bf7000" }}>DREAM HOME</span><br/>WITH US</h1>
                        <p className="mt-3 text-muted">
                                At EIVAA HOMESS, we understand that every home is a reflection of its owner.
                                Our personalized design solutions are crafted to align with your unique vision
                                and lifestyle. Whether you have a specific layout in mind, desire luxurious
                                finishes, or wish to integrate eco-friendly elements, our expert team will ensure
                                your dream home becomes a reality. Experience bespoke living spaces where comfort,
                                style, and functionality come together effortlessly.</p>
                    </div>
                </div>
                <div className="col-lg-12 number-section position-absolute d-none d-lg-flex justify-content-end w-100" style={{top:"90%",transform:"translateY(-40%)"}}>
                    <div className="col-lg-7"></div>
                    <div className="col-lg-5 d-flex bg-white gap-5 shadow-sm py-3 rounded">
                        <div className="text-center me-4">
                            <h1 className="display-5 mb-1">08+</h1>
                            <p className="text-muted small">Years of experience</p>
                        </div>
                        <div className="text-center ms-5">
                            <h1 className="display-5 text-dark mb-1">50+</h1>
                            <p className="text-muted small">Projects completed</p>
                        </div>
                    </div>
                </div>
                <div className="number-section d-block d-lg-none mt-4 text-center">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <h1 className="display-6 text-dark mb-1">08+</h1>
                            <p className="text-muted small">Years of experience</p>
                        </div>
                        <div className="col-6">
                            <h1 className="display-6 text-dark mb-1">50+</h1>
                            <p className="text-muted small">Projects completed</p>
                        </div>
                    </div>
                </div>




            </div>
          

        </div>
        </section>

        <section className="box-section text-white py-5" style={{ backgroundColor: "#0a1a26" }}>
            <div className="container">
                <div className="mb-5">
                    <h1 className="text-uppercase py-5">Why Choose Us?</h1>
                     <p style={{ maxWidth: "550px" }}>
                        At EIVAA HOMESS, we stand apart by offering a truly personalized and luxurious home-building experience. Here's why our clients choose us:
                    </p>
                </div>

                <div className="row g-4 pb-5">

                    <div className="col-md-6">
                        <div className="p-4 bg-light text-dark shadow-sm h-100">
                            <div data-aos="fade-up" data-aos-delay="200" data-aos-offset="200" data-aos-duration="800" >
                            <h3 className="fw-bold">Tailor-Made Excellence</h3>
                            <p className="mt-2">Every home we build reflects our client’s vision. Our tailor-made infrastructure service ensures your specific design preferences are seamlessly integrated into your dream home.</p>
                            </div>
                        </div>    
                    </div>

                    <div className="col-md-6">
                        <div className="p-4 bg-light text-dark shadow-sm h-100">
                            <div data-aos="fade-up" data-aos-delay="800" data-aos-offset="200" data-aos-duration="800">
                                <h3 className="fw-bold">Sustainable Solutions</h3>
                                <p className="mt-2">We incorporate eco-friendly designs and materials, ensuring luxury without compromising on sustainability.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                         <div className="p-4 bg-light text-dark shadow-sm h-100">
                            <div data-aos="fade-up" data-aos-delay="1200" data-aos-offset="200" data-aos-duration="800">
                                <h3 className="fw-bold">Transparent Process</h3>
                                <p className="mt-2">From the initial concept to the final handover, we keep you informed every step of the way. Our clear communication ensures a stress-free experience.</p>
                            </div>
                         </div>
                    </div>

                    <div className="col-md-6">
                        <div className="p-4 bg-light text-dark shadow-sm h-100">
                            <div data-aos="fade-up" data-aos-delay="2000" data-aos-offset="200" data-aos-duration="800">
                                <h3 className="fw-bold">Client-Centric Approach</h3>
                                <p className="mt-2">Your satisfaction is our ultimate priority. We collaborate closely with you to ensure your home not only meets but exceeds your expectations.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>



           
            

             <section className="process-section overflow-hidden d-none d-lg-block">
              
                  <div className="d-flex flex-wrap">
                  {steps.map((step, index) => (
                    <div key={index}
                      className="process-step text-white"
                      style={{ backgroundImage: `url(${step.image})` }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      >
                      <div className="overlay bg-dark bg-opacity-50">
                        <h2 className={`text-white mb-4 transition-move ${
                          hoveredIndex === index ? "move-up" : "move-down"
                          }`} id="overlay"
                        >
                          {step.title}
                        </h2>
                        {hoveredIndex === index && (
                        <p className="text-white small text-start fade-up">
                        {step.description}
                        </p>
                        )}
                      </div>
                    </div>
                    ))}
                  </div>
            
            </section>   


            <section className="process-section overflow-hidden mb-5 d-block d-lg-none py-4">
            <div className="container">
    <div className="row">
      {steps.map((step, index) => (
        <div
          key={index}
          className="col-12 col-sm-6 col-md-6"
       
        >
          <div
            className="process-step text-white position-relative rounded overflow-hidden"
            style={{
              backgroundImage: `url(${step.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
          >
            <div className="overlay position-absolute p-3 w-100 h-100 d-flex flex-column justify-content-end bg-dark bg-opacity-50">
              <h2
                className="text-white mb-4"
                data-aos="fade-up"
                data-aos-delay={index * 150 + 100}
              >
                {step.title}
              </h2>
              <p
                className="text-white small text-start"
                data-aos="fade-up"
                data-aos-delay={index * 150 + 300}
              >
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


            
           
      
        

        <section className="py-5 text-center text-white" style={{ backgroundColor: "#0a1a26" }}>
            <div className="container">
                <h1 className="pt-5 mt-5 pb-5 mb-5 vision-box" style={{ lineHeight: "1.6" }}>
                    <span style={{ color: "#bf7000" }}>DIFFERENT</span> BACKGROUNDS.{" "}
                    <span style={{ color: "#bf7000" }}>ONE</span> VISION.
                    <br />
                    THE FOUNDATION OF <span style={{ color: "#bf7000" }}>EIVAA HOMESS.</span>
                </h1>
            </div>
        </section>




         <section className="py-5 architect-vision mt-4" style={{ backgroundColor: "#fefaf5" }}>
      <div className="container">
        <div className="row align-items-center">
        
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={architectvision} 
              alt="Architect Desk"
              className="img-fluid shadow"
            />
          </div>

          
          <div className="col-lg-6 mb-5 pb-5 ps-5">
            <h1>Architect’s Vision</h1>
            <h5 className="text-muted pt-2">
              An architect dreamed of spaces that tell stories, not just shelter people.
            </h5>

            <h1 className="text-muted opacity-25 mt-5">Civil Engineer’s Precision</h1>
           
          </div>
        </div>

       
        <div className="text-center mt-5 pt-5">
          <h2 className="quote">
            “ We didn’t just start a company. We built a purpose.{" "}
            <span style={{ color: "#bf7000", fontWeight: "500" }}>Quality is in our DNA.</span> ”
          </h2>
          <h4 className="quote-person pt-4" style={{ color: "#1f2937" }}>By Founders</h4>
        </div>
      </div>
    </section>

    <EnquireForm/>
    </>
  );
};

export default AboutUs;
