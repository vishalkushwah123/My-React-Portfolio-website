import React from 'react'

function Portfolio() {
    return (
        <section id="portfolio" class="portfolio_wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 text-center mb-4">
                        <span class="subtitle">My Complete project</span>
                        <h2>My Latest Project</h2>
                        <p class="d-none d-md-block">These are my Latest Projects to show my Skill which is build by me<br />
                            like E-commerce, Shopify, Portfolio etc</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card p-0">
                            <img src="./images/portfolio/App-Landing-Page.png" alt="" />
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card p-0">
                            <img src='./images/portfolio/E-Commerce-Website-Using-Bootstap-5.png' alt="" />
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card p-0">
                            <img src='./images/portfolio/HeadPhones.png' alt="" />
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="card p-0">
                            <img src='./images/portfolio/Hashtag-Landing-Page.png' alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Portfolio
