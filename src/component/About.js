import React, { Component } from 'react';
import testimonials1 from '../assets/images/testimonials-1.jpg'
import testimonials2 from '../assets/images/testimonials-2.jpg'
import testimonials3 from '../assets/images/testimonials-3.jpg'

class About extends Component {

  render() {
    return (
    <>
    <section className="page-section pt-0 mb-0 pb-0 " id="terms" style={{marginTop: "150px"}}>
        <section className="page-section mb-0" id="about">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase">About</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-users"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ms-auto">
                      <p className="lead text-justify">Our mission is to make your neighborhood shopping more convenient 
                      and enjoyable. Whether you're a local resident or a visitor, our application will help you 
                      find the stores you need.</p></div>
                    <div className="col-lg-4 me-auto">
                      <p className="lead text-justify">With our extensive list of stores, you can easily explore and 
                      discover new places to shop, dine, or hang out. We strive to provide accurate and up-to-date 
                      information about each store.</p></div>
                </div>
            </div>
        </section>
    </section>
    <section className="testimonials text-center pt-5">
        <div className="container">
            <h2 className="mb-5">What people are saying...</h2>
            <div className="row d-flex justify-content-evenly">
                <div className="col-lg-3 bg-dark rounded-4 text-white me-4 p-3">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src={testimonials1} alt="person 1" />
                        <h5>Sarah L.</h5>
                        <p className="font-weight-light mb-0">"Know Your Neighborhood helped me easily find all the stores in my town!"</p>
                    </div>
                </div>
                <div className="col-lg-3 bg-dark rounded-4 text-white me-4 p-3">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src={testimonials2} alt="person 2" />
                        <h5>Mark R.</h5>
                        <p className="font-weight-light mb-0">"I discovered new stores in my town that I didn't even know existed. It's like having a local shopping guide at my fingertips!"</p>
                    </div>
                </div>
                <div className="col-lg-3 bg-dark rounded-4 text-white p-3">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src={testimonials3} alt="person 3" />
                        <h5>Laura T.</h5>
                        <p className="font-weight-light mb-0">"I no longer have to search endlessly to find a specific store in my neighborhood."</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
  }
}

export default About;