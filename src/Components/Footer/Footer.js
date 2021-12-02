import React from 'react';
import footerImg from '../../images/20191106091849_IMG_1222__1_-removebg-preview (1).png'

const Footer = () => {
    return (
        <div style={{width: '95%', margin : '0 auto', padding : '20px 0'}}>
            <div>
                <img src={footerImg}  width='' style={{border : '5px solid #ff014f'}} className='rounded-circle' alt="" />
                <br />
                <span className='logoName'><span style={{fontSize: '45px'}}>M</span>EHEDI  IRFAN</span>
                <p style={{color : '#c4cfde', letterSpacing : '1px', fontSize : '1.1em'}}>@ 2021 All rights reserved by Mehedi Hasan Irfan</p>
            </div>
        </div>
    );
};

export default Footer;