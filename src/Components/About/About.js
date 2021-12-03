import React from 'react';
import './About.css';
import Typical from 'react-typical';


const About = () => {
    return (
        <div id='about' style={{width: '95%', margin : '0 auto', padding : '80px 0'}}>
            <div>
                <h1 className='section-title' id='aboutMe' data-aos='zoom-in'>ABOUT ME</h1>
            </div>
            <div className='about_container' data-aos='fade-up'>
                <span><i class="fas fa-quote-left about_icon"></i></span>
                <h1 className='text-start aboutTitle_h1'>Hi, I’m <span className='aboutTitle'>Mehedi Hasan</span></h1>
                <h1 className='typicaltext'>I am a <span className="typicaltext_span">
                    {''}
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
                    <p className='about_desc'>I am a MERN stack developer based in Bangladesh. I have developed multiple MERN stack projects and 10+ Front End projects. Programming is my passion. I love to code. I devote my full attention to designing and building websites. My biggest strength is I never stop learning and never give up when getting any Bugs / Errors on the code. Rather than spending hours trying to figure it out. I try several methods. Eventually, I found and fixed the problem.</p>
            </div>
        </div>
    );
};

export default About;