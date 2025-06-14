import React from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/images/eivaa_footer_icon.png";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-3 mt-5 ps-lg-5 pe-lg-5">
        <div className="container-fluid">
            <div className="row mb-4">
                <div className="col-12 col-md-6 col-lg-7 mb-4">
                    <img className="img-fluid mx-auto d-block d-lg-inline" src={logo} alt="Logo" />
                    <ul className="list-unstyled d-flex flex-wrap justify-content-center justify-content-lg-start gap-4 mt-4">
                        <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                        <li><Link to="/about-us" className="text-white text-decoration-none">About us</Link></li>
                        <li><Link to="/projects" className="text-white text-decoration-none">Projects</Link></li>
                        <li><Link to="/contact" className="text-white text-decoration-none">Contact us</Link></li>
                    </ul>
                </div>      

                <div className="col-12 col-md-6 col-lg-5 mt-md-5 pt-md-5 pe-md-5">                              
                        <p className="fw-light mt-lg-5 pt-lg-5">Subscribe to stay tuned for new web design and latest updates. Let"s do it!</p>
                            <form className="d-flex flex-column flex-sm-row gap-2 pb-lg-5">           
    
                                    <input type="email" name="email" className="form-control bg-light text-dark p-2 rounded-0" placeholder="Enter your email Address" autoComplete="off"/>          
                               
                            
                                    <button className="btn btn-light p-2 rounded-0" type="submit">Subscribe</button>
                                
                            </form>
                    
                </div>   

            </div>

           
              

            <hr className="border-secondary mb-4" />

            <div className="row align-items-center">
                <div className="col-12 col-md-8 text-center text-md-start mb-3 mb-md-0 px-4">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item me-lg-4"><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
                        <li className="list-inline-item me-lg-4"><a href="#" className="text-white text-decoration-none">Terms of Use</a></li>
                        <li className="list-inline-item me-lg-4"><a href="#" className="text-white text-decoration-none">Sales and Refunds</a></li>
                        <li className="list-inline-item me-lg-4"><a href="#" className="text-white text-decoration-none">Legal</a></li>
                        <li className="list-inline-item"><a href="#" className="text-white text-decoration-none">Site Map</a></li>
                    </ul>
                    <small className="d-block mt-2">© 2025 All Rights Reserved</small>
                </div>
                <div className="col-12 col-md-4 text-center px-4 text-lg-end">
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook me-3 text-light"></i></a>
                     <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer"><i className="bi bi-telegram me-3 text-light"></i></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter me-3 text-light"></i></a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram me-3 text-light"></i></a>                                        
                    <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-pinterest me-3 text-light"></i></a>                   
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin text-light"></i></a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
