import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/css/contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import contactImg from "../assets/images/contact/plots_top_view.jpg";
const Contact = () => {

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
     {/* Hero Section */}
        <section>
            <div className="contact-section text-white d-flex align-items-end">
                <div className="container text-start"> 
                    <div data-aos="fade-up" data-aos-delay="200">                
                        <h1 className="display-4 fw-bold">LET'S BUILD YOUR DREAM<br /><span style={{ color: "#bf7000" }}>HOME TOGETHER</span></h1>
                        <p className="lead mt-3 fw-bold contact-paragraph" >CONTACT EIVAA HOMESS TO TURN YOUR VISION INTO<br />REALITY</p>
                    </div>
                        <button className="btn btn-outline-light mt-3 fw-bold contact-carousel-btn" onClick={() => scrollToSection("get-in-touch-section")}>GET IN TOUCH</button>   
                </div>
            </div>
        </section>

        <section className="bg-light py-5 mt-md-5" id="get-in-touch-section">
          <div className="container pt-md-5">
            {/* Header Section */}
            <div className="row g-4">
              <div className="col-12 col-md-3 text-center text-md-start">
                <p className="lead fw-bold mb-2 text-muted contact-us-line">Contact us</p>
                <h1 className="fw-bold get-in-touch-line">
                  GET IN <span style={{ color: '#bf7000' }}>TOUCH</span>
                </h1>
              </div>
       
          
              <div className="col-12 col-md-3 mt-md-5 pt-md-3">
                <div className="card h-100 shadow border-0 text-center text-md-start">
                  <div className="card-body">
                    <div className="mb-4 card-title">
                      <i className="fas fa-map-marker-alt me-2"></i><br/>
                      <h4 className="fw-bold" style={{ color: '#bf7000' }}>OFFICE LOCATION</h4>
                    </div>
                    <h6 className="mb-0 lh-base text-uppercase fw-bold card-lines">
                      1166/2A1, Near SVB Techpark, Vasanth Nagar,
                      Kalapatti, Coimbatore,<br/>Tamil Nadu 641048
                    </h6>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="col-12 col-md-3 mt-md-5 pt-md-3">
                <div className="card h-100 shadow border-0 text-center text-md-start">
                  <div className="card-body">
                    <div className="mb-4 card-title">
                      <i className="fas fa-clock me-2"></i><br/>
                      <h4 className="fw-bold" style={{ color: '#bf7000' }}>WORKING HOURS</h4>
                    </div>
                    <h6 className="mb-3 text-uppercase fw-bold card-lines">Weekdays - 09:00 to 07:00</h6>
                    <h6 className="mb-0 text-uppercase fw-bold card-lines">Weekends - 09:00 to 02:00</h6>
                  </div>
                </div>
              </div>

              {/* Communications */}
              <div className="col-12 col-md-3 mt-md-5 pt-md-3">
                <div className="card h-100 shadow border-0 text-center text-md-start">
                  <div className="card-body">
                    <div className="mb-4 card-title">
                      <i className="fas fa-headset me-2"></i><br/>
                      <h4 className="fw-bold" style={{ color: '#bf7000' }}>COMMUNICATIONS</h4>
                    </div>
                    <p className="mb-2 fw-bold card-lines">+91 12345 67890</p>
                    <p className="mb-0 text-uppercase fw-bold card-lines">
                      eivaahomess@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* Left Side - Image */}
              <div className="col-12 col-md-6 p-0 d-none d-md-block">              
                <img src={contactImg} alt="contact" className="img-fluid w-100" style={{ objectFit: "cover", height:"580px"}}/>
              </div>

              <div className="col-12 p-0 d-block d-md-none">              
                <img src={contactImg} alt="contact" className="img-fluid w-100" style={{ objectFit: "cover", height:"250px"}}/>
              </div>
            
              {/* Right Side - Form */}
              <div className="form-container col-12 col-md-6 px-md-5 ms-md-5 bg-white">                
                <h1 className="mb-5 mt-4 form-title">Send Us a Message</h1>
                <form>
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Name" required/>
                  </div>
                  <div className="form-group mb-3">
                    <input type="email" className="form-control" placeholder="Email Id" required/>
                  </div>
                  <div className="form-group mb-3">
                    <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-outline-dark fw-bold mt-3">SUBMIT</button>
                </form>
              </div>
            </div>
          </div>          
        </section>
    </>
  )
}

export default Contact