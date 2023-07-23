import React from 'react'

function Home() {
    return (
        <section id="home" className="banner_wrapper">
            <div className="container">
                <div className="row align-items-center text-center">
                    <div className="col-sm-12 col-lg-6 text-md-center text-lg-start pb-5">
                        <h6>WELCOME TO MY WORLD</h6>
                        <h1>I’m Vishal Kushwah<br /><span>React Js</span><br />Web Developer</h1>
                        <div className="mt-4">
                            <a className="main-btn" href="/file/vishal-resume.pdf" download>Download CV</a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 text-center text-md-center">
                        <img src="../../public/images/about.jpg" className="img-fluid rounded" id="imgg" style={{ height: 600 }} alt="logo" />
                    </div>
                </div>
            </div>

        </section >

    )
}

export default Home
