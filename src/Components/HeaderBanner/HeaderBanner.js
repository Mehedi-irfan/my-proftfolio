import React from 'react';
import './HeaderBanner.css';
import BanngerImg2 from '../../images/IMG_0052__1_-removebg-preview (1).png';
import Typical from 'react-typical';

const HeaderBanner = () => {
    return (
        <div className='row d-flex justify-content-center align-items-center headerContainer' style={{width: '95%', margin : '0 auto', padding: '100px 0', marginTop : '100px'}}>
            <div className="col-lg-7">
               <div className='fristHeading'  data-aos="fade-right">
                <p className='fristHeading_p_text'>WELCOME TO MY WORLD</p>
                <h1>Hi, I’m <span className='titleName'>Mehedi Hasan</span></h1>
                <h1>a <span className="typicaltext">
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                        " Frontend Developer",
                        2000,
                        " Web Designer",
                        2000,
                        "Mern Stack Developer",
                        2000,
                        ]}
                    ></Typical>
                    </span></h1>
                    <p className='title-desc'>I am Front-End Developer and aslo a MERN Stack Developer .I Have Worked on  multiple MERN Stack Projects.I devoted my full attention to designing and Building websites. Now I am Constantly Learn....</p>
               </div>
               <div className='socaiMedia_container'>
                   <p className='find_with_me_text'>FIND WITH ME</p>
                   <ul className='list-unstyled d-flex align-items-center text-start'>
                       <li className='icon_li'><a href="https://web.facebook.com/mehedihasanirfann/"><i class="fab fa-facebook-f iconBar"></i></a> </li>
                       <li className='icon_li ms-4'><i class="fab fa-instagram iconBar"></i></li>
                       <li className='icon_li ms-4'><a href="https://www.linkedin.com/in/md-mehedi-hasan-16b412213/"> <i class="fab fa-linkedin-in iconBar"></i></a></li>
                   </ul>
               </div>
            </div>
            <div className="col-lg-5">
                <div className='img_background' data-aos='fade-down'>
                    <img src={BanngerImg2} width='60%' alt='' />
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;