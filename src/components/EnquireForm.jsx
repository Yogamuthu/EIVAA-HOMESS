import React from 'react'
import "../assets/css/enquireform.css";
const EnquireForm = () => {
  return (
    <>
    <section className="enquiry-form-section mt-lg-5 pt-lg-5 pb-lg-5" id="enquiry-form-section">
      <div className="container-fluid pt-lg-5">
        <div className="row no-gutters">
          {/* Left Side - Enquiry Form */}
          <div className="col-lg-6 left-section d-flex align-items-center justify-content-center">
            <div className="form-container text-white p-5 mt-5">
              <h1 className="mb-5">Enquire</h1>
              <form>
                <div className="form-group mb-3">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group mb-3">
                  <input type="email" className="form-control" placeholder="Email Id" />
                </div>
                <div className="form-group mb-3">
                  <textarea className="form-control" rows="4" placeholder="Your Message" />
                </div>
                <button type="submit" className="btn btn-outline-light px-4 mt-4">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Contact Info */}
            <div className="col-lg-6 right-section d-flex flex-column justify-content-center pb-5 mt-4">           
                <div className="contact-wrapper px-lg-4 pb-2">
                    <h1 className="mb-3">Contact Us</h1>
                    <h6 className="text-muted mb-4">Get in touch with us for any queries and suggestions</h6>
            
                    <div className="row pt-5">
                        <div className='col-md-6 mb-4'>
                            <h5 className="mb-1">General queries</h5>
                            <h6 className="pt-3"><strong>+91 12345 67890</strong></h6>
                            <h6><strong>Evaahomess@gmail.com</strong></h6>
                        </div>
                        <div className="col-md-6 mb-4">
                            <h5 className="mb-1">Careers</h5>
                            <h6 className="pt-3"><strong>Evaahomess@gmail.com</strong></h6>
                        </div>
                    </div>
                  

                    <div className='pt-5'>
                        <h5 className="mb-4">Address</h5>
                        <div className="mt-4 d-flex align-items-start">     
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.244680348099!2d77.02721989673901!3d11.095133200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f9b8cc8a838d%3A0x6a02365e1dbc4d06!2sEivaa%20Homess%20%26%20IVA%20Technos!5e0!3m2!1sen!2sin!4v1748882284376!5m2!1sen!2sin" width="60" height="60" style={{ border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
                            <p className="mx-4"><strong>1166/2A1, EVAA HOMESS, Kurumbapalayam Road, Kalapatti, Coimbatore - 641 048</strong></p> 
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    
    </>
  )
}

export default EnquireForm