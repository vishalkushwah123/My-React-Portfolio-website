import React from 'react'

function Footer() {
    return (
        <section id="contact" class="footer_wrapper mt-3 mt-md-0">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 col-md-6 text-center text-md-start">
                        <div class="footer-logo mb-3 mb-md-0">
                            <img decoding="async" src="images/logo.png" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <ul class="list-unstyled d-flex justify-content-center justify-content-md-end justify-content-lg-center jus social-icon mb-3 mb-md-0">
                            <li>
                                <a href="https://github.com/vishalkushwah123"><i class="fab fa-github"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/vishuu.______/"><i class="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100035791160259"><i class="fab fa-facebook-f"></i> </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/vishal-kushwah-35143b24a"><i class="fab fa-linkedin-in"></i> </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="copyright-text text-lg-start text-center mb-3 mb-lg-0">
                            <p class="mb-0">Copyright © 2022 <a href="#">Vishal Kushwah</a>. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer
