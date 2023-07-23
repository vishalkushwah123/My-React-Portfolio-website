import React from 'react'

function Contact() {
    return (
        <section id="contact" class="contact_wrapper">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-6 order-2 order-lg-1 pe-lg-5 text-lg-start text-center">
                        <span class="subtitle">Let's Say Hi</span>
                        <h2>Hire Me.</h2>
                        <div class="row call_details mb-4">
                            <label class="col-sm-3">Call us:</label>
                            <div class="col-sm-9 mb-3 mb-lg-2 text-sm-start">
                                <a href="javascript:void(0)">+91-6264398185</a>
                            </div>
                            <label class="col-sm-3">Email:</label>
                            <div class="col-sm-9 mb-3 mb-lg-2 text-sm-start">
                                <a href="vk.vishalkushwah123@gmail.com">vk.vishalkushwah123@gmail.com</a>
                            </div>
                        </div>
                        <form>
                            <div class="mb-4">
                                <input type="text" class="form-control" placeholder="Your Name..." autocomplete="off" />
                            </div>
                            <div class="mb-4">
                                <input type="number" class="form-control" placeholder="Your Phone..." autocomplete="off" />
                            </div>
                            <div class="mb-4">
                                <input type="email" class="form-control" placeholder="Your Email..." autocomplete="off" />
                            </div>
                            <div class="mb-4">
                                <input cols="40" rows="4" class="form-control" id="message"
                                    placeholder="Write a Message..." autocomplete="off" />
                            </div>
                            <button type="submit" class="main-btn">Submit</button>
                        </form>
                    </div>
                    <div class="col-lg-6 order-1 mb-4 order-lg-1 mb-lg-0 text-center">
                        <img decoding="async" src="./images/contact.jpg" class="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
