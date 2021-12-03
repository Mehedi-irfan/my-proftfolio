import React from 'react';
import './Features.css';
const Features = () => {
    return (
        <div id='features' className='text-start' style={{width : '95%', margin : '0 auto', padding : '80px 0'}}>
          <div data-aos='fade-right'>
          <p className='features_text_p'>FEATURES</p>
          <h1 className='section-title'>What I Do</h1>
          </div>
          <div className="row">
              <div className="col-lg-4">
                  <div className='text-white features_container' data-aos='fade-down'>
                    <div className='feature_text_container'>
                        <span><i class="fas fa-laptop-code features_icon"></i></span>
                            <h4>Full Website Development</h4>
                            <p>I can build any type of website for you – like a Business, Portfolio, Company, E-Commerce store, Blog, Newspaper/Magazine, Landing page, etc.</p>
                    </div>
                  </div>
              </div>
              <div className="col-lg-4">
                <div className='text-white features_container' data-aos='fade-down'>
                    <div className='feature_text_container'>
                        <span><i class="fas fa-cart-arrow-down features_icon"></i></span>
                            <h4>Ecommerce Solutions</h4>
                            <p>I can create a fully functional online store with any type of payment gateway support and add shopping cart functionality to your existing website.</p>
                    </div>
                </div>
              </div>
              <div className="col-lg-4">
              <div className='text-white features_container' data-aos='fade-down'>
                    <div className='feature_text_container'>
                        <span><i class="fas fa-laptop features_icon"></i></span>
                            <h4>Web Design</h4>
                            <p>I can build any type of website for you – like a Business, Portfolio, Company, E-Commerce store, Blog, Newspaper/Magazine, Landing page, etc.</p>
                    </div>
                </div>
              </div>
          </div>
        </div>
    );
};

export default Features;