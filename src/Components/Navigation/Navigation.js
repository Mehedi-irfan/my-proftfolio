import React from 'react';
import logoImg from '../../images/20191106091849_IMG_1222__1_-removebg-preview (1).png';
import './Navigation.css';

const Navigation = () => {
    return (
        <div style={{background : '#212428'}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-start  fixed-top" style={{background : '#212428', width : '95%', margin : '0 auto'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logoImg} width='20%' style={{border : '4px solid #ff014f'}} className='rounded-circle' alt="" />
                    <span className='logoName'><span className='logo_title'>M</span>EHEDI  IRFAN</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link navItemStyle" aria-current="page" href="#home">HOME</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navItemStyle" href="#features">FEATURES</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navItemStyle" href="#about">ABOUT</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navItemStyle" href="#resume">RESUME</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navItemStyle" href="#protfolio">PROTFOLIO</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navItemStyle" href="#blog">BLOG</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navItemStyle" href="#contact">CONTACT</a>
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