import React from 'react'

function About() {
    return (
        <section id="about" class="about_wrapper">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-5 mb-4 mb-lg-0 text-center">
                        <img decoding="async" src="images/aboutt.jpg" class="img-fluid rounded-3" alt="About Us" />
                    </div>
                    <div class="col-lg-7 ps-lg-5 text-lg-start text-sm-center">
                        <div class="my-3 my-lg-0">
                            <span class="subtitle">My About Details</span>
                            <h2>About Me</h2>
                            <p>I’m a React Js Developer which Design and Develop Websites using Web Technologies such as HTML, CSS, Javascript, Bootstrap, <br />React Js, Node Js, Express Js, MangoDB.</p>
                        </div>
                        <div class="pt-4">
                            <ul class="nav nav-pills justify-content-center justify-content-lg-between mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-skill-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-skill" type="button" role="tab" aria-controls="pills-skill"
                                        aria-selected="true">Main Skills</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-Award-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-Award" type="button" role="tab" aria-controls="pills-Award"
                                        aria-selected="false">Upcom. Skills</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-experiance-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-experiance" type="button" role="tab"
                                        aria-controls="pills-experiance" aria-selected="false">Experience</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-education-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-education" type="button" role="tab"
                                        aria-controls="pills-education" aria-selected="false">Education</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-skill" role="tabpanel"
                                    aria-labelledby="pills-skill-tab">
                                    <div class="single-progress">
                                        <h6>HTML, CSS & Javascript</h6>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{ width: '95%' }}
                                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                        <span class="label">95%</span>
                                    </div>
                                    <div class="single-progress">
                                        <h6>Bootstrap</h6>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{ width: '95%' }}
                                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                        <span class="label">85%</span>
                                    </div>
                                    <div class="single-progress">
                                        <h6>React Js</h6>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{ width: '95%' }}
                                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                        <span class="label">75%</span>
                                    </div>
                                    <div class="single-progress">
                                        <h6>React Redux </h6>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{ width: '95%' }}
                                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                        <span class="label">80%</span>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-Award" role="tabpanel"
                                    aria-labelledby="pills-Award-tab">
                                    <ul class="text-start ps-0">
                                        <li><a href="#">C Language</a>

                                        </li>
                                        <li><a href="#">C++ Language</a>

                                        </li>
                                        <li><a href="#">Data Structure & Algorithm (DSA)</a>
                                        </li>
                                        <li><a href="#">App Development</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="pills-experiance" role="tabpanel"
                                    aria-labelledby="pills-experiance-tab">
                                    <ul class="text-start ps-0">

                                        <li><a href="#">Digital Marketer
                                            <span> -
                                                Digital Universe Company</span></a> Jan-2023 - March-2023</li>
                                        <li><a href="#">Web Developer
                                            <span> -
                                                Ubitech Solutions</span></a> Mar-2023 - Current
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="pills-education" role="tabpanel"
                                    aria-labelledby="pills-education-tab">
                                    <ul class="text-start ps-0">
                                        <li><a href="#">Bechelor of Computer Application (Pursuing)<br /><span>
                                            Vikrant University <br /> Gwalior, MP</span></a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
