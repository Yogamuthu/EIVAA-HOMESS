import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/css/projects.css";
import img1 from "../assets/images/projects/greenway.png";
import img2 from "../assets/images/projects/plots_side_view.jpeg";
import img3 from "../assets/images/projects/plots_top_view.jpg";
import EnquireForm from "./EnquireForm";
import ScrollGallery from "./ScrollGallery";

const Projects = () => {
    
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
            <div className="projects-section text-white d-flex align-items-end">
                <div className="container text-start ps-4"> 
                    <div data-aos="fade-up" data-aos-delay="200">                
                        <h1 className="display-4 fw-bold">CRAFTING TIMELESS<br /><span style={{ color: "#bf7000" }}>MASTERPIECES</span></h1>
                        <p className="lead mt-3 fw-bold projects-paragraph" >EXPLORE OUR CURATED SELECTION OF ARCHITECTURAL<br />BRILLIANCE.</p>
                    </div>
                        <button className="btn btn-outline-light mt-3 fw-bold projects-carousel-btn" onClick={() => scrollToSection("project-section")}>VIEW OUR LATEST PROJECTS</button>   
                </div>
            </div>
        </section>

        <section className="py-5 mt-5">
            <div className="container">
                <h2 className="mb-5 text-uppercase anthara-section-title">Current Masterpiece</h2>
                <div className="row">                  
                    <div className="col-12 mb-4">
                        <img src={img1} alt="Anthara Garden View" data-aos="fade-up" data-aos-delay="200"
                        className="img-fluid shadow-sm" style={{height:"600px", width:"100%"}}/>
                    </div>
                </div>

                <div className="row align-items-end">
                    <div className="col-md-6">
                        <h1 className="mb-3 text-uppercase mt-2 anthara-section-title" data-aos="fade-up" data-aos-delay="400">Anthara</h1>
                        <p className="mb-4 anthara-section-para" data-aos="fade-up" data-aos-delay="600">
                            Discover our latest architectural masterpiece — a luxury villa nestled in the heart of serene landscapes. 
                            This tailor-made home reflects modern elegance, featuring expansive glass facades, open-concept living spaces, 
                            and intricate detailing. Designed to harmonize with nature while offering ultimate comfort, this project 
                            exemplifies EIVAA HOMESS's dedication to creating timeless luxury.
                        </p>

                        <div className="d-flex gap-3 mb-4">
                            <button className="btn px-4 fw-bold anthara-section-btn">Download Brochure</button>
                            <button className="btn px-4 fw-bold anthara-section-btn">View Floor Plan</button>
                        </div>
                    </div>

            
                    <div className="col-md-6 mt-4">
                        <div className="row g-3 mb-3">
                            <div className="sm-col-12 col-md-6">
                                <div className="card border-0 shadow-sm rounded-0 text-start h-100 px-3 py-3" style={{backgroundColor:"#eae3d9"}}>
                                    <div className="card-body">
                                        <div className="mb-1 card-line-1"><i className="bi bi-geo-alt-fill me-2"></i>Project Location</div>
                                        <div className="fw-bold text-uppercase card-line-2" style={{color:"#bf7000"}}>Coimbatore</div>
                                    </div>
                                </div>
                            </div>
                                  
                            <div className="sm-col-12 col-md-6"> 
                                <div className="card border-0 shadow-sm rounded-0 text-start h-100 px-3 py-3" style={{backgroundColor:"#eae3d9"}}>
                                    <div className="card-body">
                                        <div className="mb-1 card-line-1"><i className="bi bi-house-door-fill me-2"></i>Total number of houses</div>
                                        <div className="fw-bold text-uppercase card-line-2" style={{color:"#bf7000"}}>32 Houses</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        </section>

        <section className="py-5 mb-lg-5" id="project-section">
            <div className="container">
                <h2 className="mb-5 text-uppercase legacy-title">Our Legacy of Excellence</h2>
                <div className="row g-4">
                    <div className="col-md-6">
                        <img src={img2} alt="IVA Agam" className="img-fluid shadow-sm mb-3" style={{height:"500px"}}/>
                        <h3 className="fw-bold text-uppercase mt-3 iva-title">Iva Agam<span>&#129133;</span></h3>
                        <p className="small text-uppercase pt-2">Designed to harmonize with nature while offering ultimate comfort, this project exemplifies EIVAA HOMESS's dedication to creating timeless luxury.</p>
                    </div>

                    <div className="col-md-6">
                        <img src={img3} alt="IVA Aalayam" className="img-fluid shadow-sm mb-3" style={{height:"500px"}}/>
                        <h3 className="fw-bold text-uppercase mt-3 iva-title">IVA Aalayam<span>&#129133;</span></h3>
                        <p className="small text-uppercase pt-2">Designed to harmonize with nature while offering ultimate comfort, this project exemplifies EIVAA HOMESS's dedication to creating timeless luxury.</p>
                    </div>
                </div>
            </div>
        </section>

        <ScrollGallery/> 
        <EnquireForm/>
    </>
  )
}

export default Projects