import React from 'react';
import logoImg from '../../images/20191106091849_IMG_1222__1_-removebg-preview (1).png';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg text-start " style={{background : '#212428', width : '95%', margin : '0 auto'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logoImg} width='20%' style={{border : '4px solid #ff014f'}} className='rounded-circle' alt="" />
                    <span className='logoName'><span style={{fontSize: '45px'}}>M</span>EHEDI  IRFAN</span>
                </a>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon navIcon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link navItemStyle" aria-current="page" href="/home">HOME</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navItemStyle" href="/">FEATURES</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navItemStyle" href="/">ABOUT</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navItemStyle" href="/">RESUME</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navItemStyle" href="/">PROTFOLIO</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navItemStyle" href="/">BLOG</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navItemStyle" href="/">CONTACT</a>
                    </li>
                    <li className="nav-item mx-2">
                    <a className=" btn-resume" href="https://drive.google.com/file/d/1r6Q6CEQhCxQjDU1IMjJD4YRuiwPse6HY/view?usp=sharing">RESUME <i className="fas fa-cloud-download-alt"></i></a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navigation;