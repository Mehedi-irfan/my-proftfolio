import React from 'react';
import './Protfolio.css';
import VactionTravel from '../../images/project_ss/vaction-travel.png';
import CarStore from '../../images/project_ss/car-store.png';
import CriticalEyeCare from '../../images/project_ss/critical-eye-hospital.png';
import EmaJohn from '../../images/project_ss/ema-john.png';
import StudyPoint from '../../images/project_ss/study-point.png';
import vactionTravelSS1 from '../../images/vaction-travel_ss/Screenshot (25).png';
import vactionTravelSS2 from '../../images/vaction-travel_ss/Screenshot (26).png';
import vactionTravelSS3 from '../../images/vaction-travel_ss/Screenshot (27).png';
import carStoreSS1 from '../../images/car-store_ss/Screenshot (29).png';
import carStoreSS2 from '../../images/car-store_ss/Screenshot (32).png';
import carStoreSS3 from '../../images/car-store_ss/Screenshot (33).png';
import criticalEyeHospitalSS1 from '../../images/critical-eye-care-hospital_ss/Screenshot (34).png';
import criticalEyeHospitalSS2 from '../../images/critical-eye-care-hospital_ss/Screenshot (35).png';
import criticalEyeHospitalSS3 from '../../images/critical-eye-care-hospital_ss/Screenshot (36).png';
import studyPointSS1 from '../../images/sudy-point_ss/Screenshot (37).png';
import studyPointSS2 from '../../images/sudy-point_ss/Screenshot (38).png';
import studyPointSS3 from '../../images/sudy-point_ss/Screenshot (39).png';
import emaJohnSS1 from '../../images/ema-john_ss/Screenshot (40).png';
import emaJohnSS2 from '../../images/ema-john_ss/Screenshot (41).png';
import emaJohnSS3 from '../../images/ema-john_ss/Screenshot (42).png';

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
                                {/* btn close\ */}
                                <button className='seeDetails_btn' data-bs-toggle="modal" data-bs-target="#exampleModal">SEE DETAILS <i class="fas fa-arrow-right"></i></button>
                            

                               
                                <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg  modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content bg-dark">
                                    <div class="modal-header">
                                        <h5 class="modal-title modatTitle" id="exampleModalLabel">Vaction Travel</h5>
                                    </div>
                                    <div class="modal-body">
                                        {/* slider  */}

                                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                            <img src={vactionTravelSS1} class="d-block w-100" alt="..." />
                                            </div>
                                            <div class="carousel-item">
                                            <img src={vactionTravelSS2} class="d-block w-100" alt="..." />
                                            </div>
                                            <div class="carousel-item">
                                            <img src={vactionTravelSS3} class="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        
                                        <a class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </a>
                                        </div>
                                        <div>
                                        <div className='protfolio_info'>
                                            <span>MERN Stack Project</span>
                                            <p>Tour based website where users can find best packages
                                            offered by vaction tour and can book their reservation trip.Users can book any room and that will be stored in the
                                            database. And if the user wants, he can also see all order
                                            bookings, Also users can add new services, manage all orders.Users can add more product and users can product deleted
                                            and updated</p>
                                        </div>
                                        <div>
                                            <ul className='text-white text-start fs-5'>
                                                <li>This is a travel website</li>
                                                <li>This is single Page application</li>
                                                <li>This website is fully responsive</li>
                                                <li>This website use mongodb and express</li>
                                                <li>This website have authentication system with firebase</li>
                                                <li>user when visted the website he can see mony services</li>
                                            </ul>
                                        </div>
                                        <div className='text-white text-start'>
                                            <h5>Technology :-</h5>
                                            <p>HTML, CSS, BOOTSTRAP, REACT JS, REACT ROUTER, NODE JS, EXPRESS JS, MONGODB</p>
                                            <h5>Tools :-</h5>
                                            <p>VS Code Editor, Netlify, Firebase, Github, Chrome Dev Tool</p>
                                        </div>
                                        </div>

                                    </div>
                                    <div class="modal-footer m-auto">
                                    <button><a href="https://vacation-travel.netlify.app/">LIVE SITE</a> <i class="fas fa-share-square"></i></button>
                                       <button><a href="https://github.com/programming-hero-web-course1/tourism-or-delivery-website-client-side-Mehedi-irfan">CLIENT CODE</a> <i class="fab fa-github"></i></button> 
                                        <button><a href="https://github.com/programming-hero-web-course1/tourism-or-delivery-website-server-side-Mehedi-irfan">SERVER CODE</a> <i class="fab fa-github"></i></button>
                                    </div>
                                    </div>
                                </div>
                                </div>

                            
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
                             {/* btn close\ */}
                             <button className='seeDetails_btn' data-bs-toggle="modal" data-bs-target="#exampleModal1">SEE DETAILS <i class="fas fa-arrow-right"></i></button>
                            

                               
                            <div class="modal fade " id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg  modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content bg-dark">
                                <div class="modal-header">
                                    <h5 class="modal-title modatTitle" id="exampleModalLabel">Online Car Store</h5>
                                </div>
                                <div class="modal-body">
                                    {/* slider  */}

                                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                        <img src={carStoreSS1} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                        <img src={carStoreSS2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                        <img src={carStoreSS3} class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    
                                    <a class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </a>
                                    </div>
                                    <div>
                                    <div className='protfolio_info'>
                                    <span>MERN Stack Project</span>
                                    <p>Authentication System added (user and admin)
                                    User can order cars, write review and these will be stored in the
                                    database. And if the user wants , he can also delete orders.
                                    Admin can add products, manage all products, manage all orders
                                    and also make admin too. when user services details click then user can see more details about services</p>
                                    </div>
                                    <div>
                                        <ul className='text-white text-start fs-5'>
                                            <li>This is a travel website</li>
                                            <li>This is single Page application</li>
                                            <li>This website is fully responsive</li>
                                            <li>This website use mongodb and express</li>
                                            <li>This website have authentication system with firebase</li>
                                            <li>user when visted the website he can see mony services</li>
                                        </ul>
                                    </div>
                                    <div className='text-white text-start'>
                                        <h5>Technology :-</h5>
                                        <p>HTML, CSS, BOOTSTRAP, REACT JS, REACT ROUTER, NODE JS, EXPRESS JS, MONGODB</p>
                                        <h5>Tools :-</h5>
                                        <p>VS Code Editor, Netlify, Firebase, Github, Chrome Dev Tool</p>
                                    </div>
                                    </div>

                                </div>
                                <div class="modal-footer m-auto">
                                 <button><a href="https://car-store-website.netlify.app/"> CLIENT CODE </a><i class="fab fa-github"></i></button>
                                <button><a href="https://github.com/programming-hero-web-course-4/niche-website-server-side-Mehedi-irfan">SERVER CODE</a> <i class="fab fa-github"></i></button>
                                </div>
                                </div>
                            </div>
                            </div>
                           
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

                             {/* btn close\ */}
                             <button className='seeDetails_btn' data-bs-toggle="modal" data-bs-target="#exampleModal2">SEE DETAILS <i class="fas fa-arrow-right"></i></button>
                            

                               
                            <div class="modal fade " id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg  modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content bg-dark">
                                <div class="modal-header">
                                    <h5 class="modal-title modatTitle" id="exampleModalLabel">Critical Eye Care Hospital</h5>
                                </div>
                                <div class="modal-body">
                                    {/* slider  */}

                                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                        <img src={criticalEyeHospitalSS1} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                        <img src={criticalEyeHospitalSS2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                        <img src={criticalEyeHospitalSS3} class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    
                                    <a class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </a>
                                    </div>
                                    <div>
                                    <div className='protfolio_info'>
                                    <span>Front-End Project</span>
                                    <p>Eye hospital related website
                                    User can buy many types of services for her and his eye
                                    Users can added more services and doctor.Authentication stystem added. User can login or register. If your register than user can login. when user services details click then user can see more details about services</p>
                                    </div>
                                    <div>
                                        <ul className='text-white text-start fs-5'>
                                            <li>This is a travel website</li>
                                            <li>This is single Page application</li>
                                            <li>This website is fully responsive</li>
                                            <li>This website use mongodb and express</li>
                                            <li>This website have authentication system with firebase</li>
                                            <li>user when visted the website he can see mony services</li>
                                        </ul>
                                    </div>
                                    <div className='text-white text-start'>
                                        <h5>Technology :-</h5>
                                        <p>HTML, CSS, BOOTSTRAP, REACT JS, REACT ROUTER</p>
                                        <h5>Tools :-</h5>
                                        <p>VS Code Editor, Netlify, Firebase, Github, Chrome Dev Tool</p>
                                    </div>
                                    </div>

                                </div>
                                <div class="modal-footer m-auto">
                                <button><a href="https://critical-eye-care-hospital.netlify.app/">LIVE SITE</a> <i class="fas fa-share-square"></i></button>
                                 <button className=''><a href="https://github.com/Programming-Hero-Web-Course3/healthcare-related-website-Mehedi-irfan">CLIENT CODE</a> <i class="fab fa-github"></i></button>
                                </div>
                                </div>
                            </div>
                            </div>

                           
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

                             {/* btn close\ */}
                             <button className='seeDetails_btn' data-bs-toggle="modal" data-bs-target="#exampleModal3">SEE DETAILS <i class="fas fa-arrow-right"></i></button>
                            

                               
                            <div class="modal fade " id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg  modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content bg-dark">
                                <div class="modal-header">
                                    <h5 class="modal-title modatTitle" id="exampleModalLabel">Study Point</h5>
                                </div>
                                <div class="modal-body">
                                    {/* slider  */}

                                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                        <img src={studyPointSS1} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                        <img src={studyPointSS2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                        <img src={studyPointSS3} class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    
                                    <a class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </a>
                                    </div>
                                    <div>
                                    <div className='protfolio_info'>
                                    <span>Front-End Project</span>
                                    <p>Study related website. there is many types of study services. users can buy a service. there is user private route.when users login then user see service details.this site have a blog.user can read blog.there many types of blog. there was a many typs of services.</p>
                                    </div>
                                    <div>
                                        <ul className='text-white text-start fs-5'>
                                            <li>This is a travel website</li>
                                            <li>This is single Page application</li>
                                            <li>This website is fully responsive</li>
                                            <li>This website use mongodb and express</li>
                                            <li>This website have authentication system with firebase</li>
                                            <li>user when visted the website he can see mony services</li>
                                        </ul>
                                    </div>
                                    <div className='text-white text-start'>
                                        <h5>Technology :-</h5>
                                        <p>HTML, CSS, BOOTSTRAP, REACT JS, REACT ROUTER</p>
                                        <h5>Tools :-</h5>
                                        <p>VS Code Editor, Netlify, Firebase, Github, Chrome Dev Tool</p>
                                    </div>
                                    </div>

                                </div>
                                <div class="modal-footer m-auto">
                                <button><a href="https://study-point-irfan.netlify.app/">LIVE SITE</a> <i class="fas fa-share-square"></i></button>
                                 <button className=''><a href="https://github.com/ProgrammingHeroWC4/review-website-Mehedi-irfan">CLIENT CODE</a> <i class="fab fa-github"></i></button>
                                </div>
                                </div>
                            </div>
                            </div>

                          
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

                             {/* btn close\ */}
                             <button className='seeDetails_btn' data-bs-toggle="modal" data-bs-target="#exampleModal4">SEE DETAILS <i class="fas fa-arrow-right"></i></button>
                            

                               
                            <div class="modal fade " id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg  modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content bg-dark">
                                <div class="modal-header">
                                    <h5 class="modal-title modatTitle" id="exampleModalLabel">Ema John</h5>
                                </div>
                                <div class="modal-body">
                                    {/* slider  */}

                                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                        <img src={emaJohnSS1} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                        <img src={emaJohnSS2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                        <img src={emaJohnSS3} class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    
                                    <a class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </a>
                                    </div>
                                    <div>
                                    <div className='protfolio_info'>
                                    <span>Front-End Project</span>
                                    <p>This is E-commerce site.this site have many product.This site have login sytem. If user login in site then user can buy any product. this site have many types of product. user can buy many product at a time. This Site data come from fake data.This site have Authentication system.
                                    </p>
                                    </div>
                                    <div>
                                        <ul className='text-white text-start fs-5'>
                                            <li>This is a travel website</li>
                                            <li>This is single Page application</li>
                                            <li>This website is fully responsive</li>
                                            <li>This website use mongodb and express</li>
                                            <li>This website have authentication system with firebase</li>
                                            <li>user when visted the website he can see mony services</li>
                                        </ul>
                                    </div>
                                    <div className='text-white text-start'>
                                        <h5>Technology :-</h5>
                                        <p>HTML, CSS, BOOTSTRAP, REACT JS, REACT ROUTER</p>
                                        <h5>Tools :-</h5>
                                        <p>VS Code Editor, Netlify, Firebase, Github, Chrome Dev Tool</p>
                                    </div>
                                    </div>

                                </div>
                                <div class="modal-footer m-auto">
                                <button><a href="https://kind-euclid-4b9c25.netlify.app/">LIVE SITE</a> <i class="fas fa-share-square"></i></button>
                                <button className=''><a href="https://github.com/Mehedi-irfan/ema-jhon-react">CLIENT CODE</a> <i class="fab fa-github"></i></button>
                                </div>
                                </div>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    );
};

export default Protfolio;