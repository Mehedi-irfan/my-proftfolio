import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import myImg from '../../images/20191106091849_IMG_1222-removebg-preview (1).png'

const Contact = () => {
    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm('service_v6113au', 'template_fawkeil', e.target, 'user_8l20h8WITtZ02Yx20Q36j')
        .then(res => {
            console.log(res);
            e.target.reset();
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div id='contact' style={{width: '95%', margin : '0 auto', padding : '80px 0'}}>
            <div data-aos='zoom-in'>
                <p className='protfolio_text_p'>CONTACT</p>
                <h1 className='section-title' id='contectMe'>Contact With Me</h1>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className='features_container' data-aos='fade-up'>
                        <div className='contactImg_container'>
                            <img src={myImg} width='50%' alt="" />
                        </div>
                        <div className='text-white text-start mt-3'>
                            <h4>Name :- MD Mehedi Hasan</h4>
                            <h4 className='my-3'>Phone :- 01892054369</h4>
                            <h5>Email :- mehediirfan99@gmail.com</h5>
                            <h5 className='my-3'>Linkedin :- <a className=' text-danger' href="https://www.linkedin.com/in/md-mehedi-hasan-16b412213/"> LInkedin Here</a></h5>
                            <h5>GitHub :- <a className='text-danger' href="https://github.com/Mehedi-irfan"> GitHub Here</a></h5>
                            <h5 className='my-3'>Address :- Mirsrai, Chattogram, Bangladesh</h5>
                        </div>
                        <div style={{marginTop :'50px'}}>
                            <p className='find_with_me_text'>FIND WITH ME</p>
                            <ul className='list-unstyled d-flex align-items-center text-start'>
                            <li className='icon_li'><a href="https://web.facebook.com/mehedihasanirfann/"><i class="fab fa-facebook-f iconBar"></i></a> </li>
                            <li className='icon_li ms-4'><i class="fab fa-instagram iconBar"></i></li>
                            <li className='icon_li ms-4'><a href="https://www.linkedin.com/in/md-mehedi-hasan-16b412213/"> <i class="fab fa-linkedin-in iconBar"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div style={{paddingBottom : '120px'}} data-aos='fade-up'>
                        <form onSubmit={sendEmail} className='form-control text-start contactForm' style={{marginTop: '50px'}}>
                            <lebel  className='label_name'>Name</lebel>
                            <br />
                            <input className='form-control' name='name' type="text" placeholder='Enter Your Name' />
                            <br />
                            <lebel  className='label_name'>Phone</lebel>
                            <br />
                            <input className='form-control' type="number" name='number' placeholder='Enter Your Number' />
                            <br />
                            <lebel  className='label_name'>Email</lebel>
                            <br />
                            <input className='form-control' type="email" name="user_email" placeholder='Enter Your Email' id="" />
                            <br />
                            <label  className='label_name'>Subject</label>
                            <br />
                            <input className='form-control' type="text" name='subject' placeholder='Enter Your Subject' />
                            <br />
                            <label  className='label_name'>Message</label>
                            <br />
                            <textarea className='form-control textarea' name="message" placeholder='Enter Your Message' id=""  rows="5"></textarea>
                            <input className='sendMessage_btn' type="submit" value="SEND MESSAGE" />
                        </form>
                    </div>
                </div>
            </div>
            <hr className='border border-2' />
        </div>
    );
};

export default Contact;