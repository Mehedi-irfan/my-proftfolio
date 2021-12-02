import React from 'react';
import logoImg from '../../images/20191106091849_IMG_1222__1_-removebg-preview (1).png';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg text-start" style={{background : '#212428', width : '95%', margin : '0 auto'}}>
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src={logoImg} width='20%' style={{border : '4px solid #ff014f'}} className='rounded-circle' alt="" />
                    <span className='logoName'><span style={{fontSize: '45px'}}>M</span>EHEDI  IRFAN</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link navItemStyle" aria-current="page" href="/home">HOME</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link navItemStyle" href="/features">FEATURES</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link navItemStyle" href="/about">ABOUT</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link navItemStyle" href="/resume">RESUME</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link navItemStyle" href="/protfolio">PROTFOLIO</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link navItemStyle" href="/blog">BLOG</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link navItemStyle" href="/contact">CONTACT</a>
                    </li>
                    <li class="nav-item mx-2">
                    <a class=" btn-resume" href="https://drive.google.com/file/d/1r6Q6CEQhCxQjDU1IMjJD4YRuiwPse6HY/view?usp=sharing">RESUME <i class="fas fa-cloud-download-alt"></i></a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navigation;