import React from 'react';
import './Resume.css';



const Resume = () => {
    
    return (
        <div style={{width: '95%', margin : '0 auto', padding : '80px 0'}}>
        <div data-aos='zoom-in'>
            <p className='protfolio_text_p'>RESUME</p>
            <h1 className='section-title' id='eduSkil'>EDUCATIONA AND SKILL</h1>
        </div>
        <div className="row" style={{width : '88%', margin : '0 auto'}}>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div data-aos='fade-up'>
                    <div className='edu_container'>
                        <h5>DIPLOMA IN ENGINEERING</h5>
                        <h4>CHATTOGRAM POLYTECHNIC INSTITUTE</h4>
                        <h6>COMPUTER SCIENCE & TECHNOLOGY</h6>
                        <p>2017 - RUNNING</p>
                    </div>
                    <div className='edu_container'>
                        <h5>SSC IN SCIENCE</h5>
                        <h4>NIZAMPUR MUSLIM HIGH SCHOOL</h4>
                        <h6>SCIENCE</h6>
                        <p>PASSED IN - 2017</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div  data-aos='fade-up'>
                    <div className='skill_container'>
                        <h5 className='skill_title'>SKILLS</h5>
                        <h4>FRONT-END </h4>
                           <div className='my-4'>
                                <span class='sklii_text'>HTML</span>
                                <div class="progress prograss_bar">
                                    <div class="progress-bar progressBar" role="progressbar" aria-valuenow="30" style={{width : '85%'}} aria-valuemin="25" aria-valuemax="100">
                                    </div>
                                </div>
                                <span  class='sklii_text'>CSS</span>
                                <div class="progress prograss_bar">
                                    <div class="progress-bar progressBar" role="progressbar" aria-valuenow="25" style={{width : '80%'}} aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                                <span  class='sklii_text'>JAVASCRIPT</span>
                                <div class="progress prograss_bar">
                                    <div class="progress-bar progressBar" role="progressbar" aria-valuenow="50"  style={{width : '50%'}} aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                                <span  class='sklii_text'>BOOTSTRAP</span>
                                <div class="progress prograss_bar">
                                    <div class="progress-bar progressBar" role="progressbar" aria-valuenow="75"  style={{width : '80%'}} aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                                <span  class='sklii_text'>MATERIAL UI</span>
                                <div class="progress prograss_bar">
                                    <div class="progress-bar progressBar" role="progressbar" aria-valuenow="100"  style={{width : '40%'}} aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                                <span  class='sklii_text'>TAILWIND CSS</span>
                                <div class="progress prograss_bar">
                                    <div class="progress-bar progressBar" role="progressbar" aria-valuenow="100"  style={{width : '50%'}} aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                                <span  class='sklii_text'>REACT JS</span>
                                <div class="progress prograss_bar">
                                    <div class="progress-bar progressBar" role="progressbar" aria-valuenow="100"  style={{width : '70%'}} aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                                <span  class='sklii_text'>FIREBASE</span>
                                <div class="progress prograss_bar">
                                    <div class="progress-bar progressBar" role="progressbar" aria-valuenow="100"  style={{width : '80%'}} aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                           </div>
                        <h4>BACK-END </h4>
                           <div className='my-4'>
                                <span class='sklii_text'>NODE JS</span>
                              <div class="progress prograss_bar">
                                <div class="progress-bar progressBar" role="progressbar" aria-valuenow="30" style={{width : '60%'}} aria-valuemin="25" aria-valuemax="100">
                                </div>
                                </div>
                                <span  class='sklii_text'>EXPRESS JS</span>
                                <div class="progress prograss_bar">
                                    <div class="progress-bar progressBar" role="progressbar" aria-valuenow="25" style={{width : '60%'}} aria-valuemin="0" aria-valuemax="100">
                                </div>
                                </div>
                                <span  class='sklii_text'>MONGODB</span>
                                <div class="progress prograss_bar">
                                    <div class="progress-bar progressBar" role="progressbar" aria-valuenow="70"  style={{width : '50%'}} aria-valuemin="0" aria-valuemax="100">
                                </div>
                                </div>
                                
                           </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Resume;