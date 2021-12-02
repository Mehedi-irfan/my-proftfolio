import React from 'react';
import './Protfolio.css';
import VactionTravel from '../../images/project_ss/vaction-travel.png';
import CarStore from '../../images/project_ss/car-store.png';
import CriticalEyeCare from '../../images/project_ss/critical-eye-hospital.png';
import EmaJohn from '../../images/project_ss/ema-john.png';
import StudyPoint from '../../images/project_ss/study-point.png';

const Protfolio = () => {
    return (
        <div style={{width: '95%', margin : '0 auto', padding : '80px 0'}}>
            <div data-aos='zoom-in'>
                <p className='protfolio_text_p'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
                <h1 className='section-title' id='aboutMe'>My Portfolio</h1>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className=' features_container' data-aos='fade-up'>
                       <div className='img_container'>
                            <img src={VactionTravel} className='w-100 rounded-3' alt="" />
                            <div className='img_desc'>
                                <h5>Technology :-</h5>
                                <p>HTML, CSS, BOOTSTRAP, REACT JS, REACT ROUTER, NODE JS, EXPRESS JS, MONGODB</p>
                                <h5>Tools :-</h5>
                                <p>VS Code Editor, Netlify, Firebase, Github, Chrome Dev Tool</p>
                            </div>
                       </div>
                        <div className='protfolio_info'>
                            <span>MERN Stack Project</span>
                            <p>Tour based website where users can find best packages
                            offered by vaction tour and can book their reservation trip.Users can book any room and that will be stored in the
                            database. And if the user wants, he can also see all order
                            bookings, Also users can add new services, manage all orders.Users can add more product and users can product deleted
                            and updated</p>
                        </div>
                        <div className='protfilo_btn'>
                            <button><a href="https://vacation-travel.netlify.app/">LIVE SITE</a> <i class="fas fa-share-square"></i></button>
                            <button className='mb-3'><a href="https://github.com/programming-hero-web-course1/tourism-or-delivery-website-client-side-Mehedi-irfan">CLIENT CODE</a> <i class="fab fa-github"></i></button>
                            <button><a href="https://github.com/programming-hero-web-course1/tourism-or-delivery-website-server-side-Mehedi-irfan">SERVER CODE</a> <i class="fab fa-github"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                <div className=' features_container' data-aos='fade-up'>
                       <div className='img_container'>
                            <img src={CarStore} className='w-100 rounded-3' alt="" />
                            <div className='img_desc'>
                                <h5>Technology :-</h5>
                                <p>HTML, CSS, BOOTSTRAP, REACT JS, REACT ROUTER, NODE JS, EXPRESS JS, MONGODB</p>
                                <h5>Tools :-</h5>
                                <p>VS Code Editor, Netlify, Firebase, Github, Chrome Dev Tool</p>
                            </div>
                       </div>
                        <div className='protfolio_info'>
                            <span>MERN Stack Project</span>
                            <p>Authentication System added (user and admin)
                            User can order cars, write review and these will be stored in the
                            database. And if the user wants , he can also delete orders.
                            Admin can add products, manage all products, manage all orders
                            and also make admin too. when user services details click then user can see more details about services</p>
                        </div>
                        <div className='protfilo_btn'>
                            <button><a href="https://car-store-website.netlify.app/">LIVE SITE</a> <i class="fas fa-share-square"></i></button>
                            <button className='mb-3'><a href="https://car-store-website.netlify.app/"> CLIENT CODE </a><i class="fab fa-github"></i></button>
                            <button><a href="https://github.com/programming-hero-web-course-4/niche-website-server-side-Mehedi-irfan">SERVER CODE</a> <i class="fab fa-github"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className=' features_container' data-aos='fade-up'>
                       <div className='img_container'>
                            <img src={CriticalEyeCare} className='w-100 rounded-3' alt="" />
                            <div className='img_desc'>
                                <h5>Technology :-</h5>
                                <p>HTML, CSS, BOOTSTRAP, REACT JS, REACT ROUTER, FIREBASE AUTHENTICATION</p>
                                <h5>Tools :-</h5>
                                <p>VS Code Editor, Netlify, Firebase, Github, Chrome Dev Tool</p>
                            </div>
                       </div>
                        <div className='protfolio_info'>
                            <span>Front-End Project</span>
                            <p>Eye hospital related website
                            User can buy many types of services for her and his eye
                            Users can added more services and doctor.Authentication stystem added. User can login or register. If your register than user can login. when user services details click then user can see more details about services</p>
                        </div>
                        <div className='protfilo_btn'>
                            <button><a href="https://critical-eye-care-hospital.netlify.app/">LIVE SITE</a> <i class="fas fa-share-square"></i></button>
                            <button className=''><a href="https://github.com/Programming-Hero-Web-Course3/healthcare-related-website-Mehedi-irfan">CLIENT CODE</a> <i class="fab fa-github"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                <div className=' features_container' data-aos='fade-up'>
                       <div className='img_container'>
                            <img src={StudyPoint} className='w-100 rounded-3' alt="" />
                            <div className='img_desc'>
                                <h5>Technology :-</h5>
                                <p>HTML, CSS, BOOTSTRAP, REACT JS, REACT ROUTER</p>
                                <h5>Tools :-</h5>
                                <p>VS Code Editor, Netlify, Github, Chrome Dev Tool</p>
                            </div>
                       </div>
                        <div className='protfolio_info'>
                            <span>Front-End Project</span>
                            <p>Study related website. there is many types of study services. users can buy a service. there is user private route.when users login then user see service details.this site have a blog.user can read blog.there many types of blog. there was a many typs of services.</p>
                        </div>
                        <div className='protfilo_btn'>
                            <button><a href="https://study-point-irfan.netlify.app/">LIVE SITE</a> <i class="fas fa-share-square"></i></button>
                            <button className=''><a href="https://github.com/ProgrammingHeroWC4/review-website-Mehedi-irfan">CLIENT CODE</a> <i class="fab fa-github"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                <div className=' features_container' data-aos='fade-up'>
                       <div className='img_container'>
                            <img src={EmaJohn} className='w-100 rounded-3' alt="" />
                            <div className='img_desc'>
                                <h5>Technology :-</h5>
                                <p>HTML, CSS, BOOTSTRAP, REACT JS, REACT ROUTER</p>
                                <h5>Tools :-</h5>
                                <p>VS Code Editor, Netlify, Github, Chrome Dev Tool</p>
                            </div>
                       </div>
                        <div className='protfolio_info'>
                            <span>Front-End Project</span>
                            <p>This is E-commerce site.this site have many product.This site have login sytem. If user login in site then user can buy any product. this site have many types of product. user can buy many product at a time. This Site data come from fake data.This site have Authentication system.
                            </p>
                        </div>
                        <div className='protfilo_btn'>
                            <button><a href="https://kind-euclid-4b9c25.netlify.app/">LIVE SITE</a> <i class="fas fa-share-square"></i></button>
                            <button className=''><a href="https://github.com/Mehedi-irfan/ema-jhon-react">CLIENT CODE</a> <i class="fab fa-github"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    );
};

export default Protfolio;