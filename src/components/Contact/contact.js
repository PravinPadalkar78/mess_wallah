import React from 'react'
import './contact.css'
import contactSvg from '../imges/contact.svg'
const contact = () => {
    return (
        <section>
            <h1>Contact Us</h1>
            <div className="contact-content">

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">


                            <div className="row justify-content-center">
                                <div className="col-md-6">

                                    <h2>Let's talk about everything!</h2>
                                    <h6>Feel Free to provide us Feedback</h6>

                                    <p><img src={contactSvg} alt="Image" className="img-fluid" /></p>


                                </div>
                                <div className="col-md-6">

                                    <form className="mb-5" action="https://formspree.io/f/mayzanny" method="POST" id="contactForm" name="contactForm" >
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control" name="name" id="name" required placeholder="Your name" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control" name="email" id="email" required placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control" name="subject" id="subject" required placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <textarea className="form-control" name="message" id="message" required cols="30" rows="15" placeholder="Write your message"></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <input type="submit" value="Send Message" className="btn-contact btn-primary rounded-0 py-2 my-5 px-4" />
                                                <span className="submitting"></span>
                                            </div>
                                        </div>
                                    </form>

                                    <div id="form-message-warning mt-4"></div>
                                    <div id="form-message-success">
                                        Your message was sent, thank you!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default contact
