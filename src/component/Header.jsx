import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header class="header_wrapper">
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img decoding="async" src="images/logo.png" class="img-fluid" alt="logo" />
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        <i class="fas fa-stream navbar-toggler-icon"></i>
                    </button>

                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav menu-navbar-nav">
                            <li class="nav-item">
                                {/* <a class="nav-link active" aria-current="page" href="#home">Home</a> */}
                                <Link className='nav-link' to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='nav-link' to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='nav-link' to="/service">Service</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='nav-link' to="/portfolio">Portfolio</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='nav-link' to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item mt-3 mt-lg-0">
                                {/* <a class="main-btn" href="#contact">Hire Me</a> */}
                                <Link className='main-btn' to="/contact">Hire Me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
