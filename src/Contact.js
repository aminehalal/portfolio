import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Contact() {
    const serviceId = 'service_jh37oxg';
    const templateId = 'template_fihojnq';
    const publicKey = '-ip2gcHmEy9gGVRcw';
    const [successMessage ,setSuccessMessage] = useState('');
    const [errorMessages, setErrorMessages] = useState({});
    const form = useRef();
    const name = useRef();
    const email = useRef();
    const subject = useRef();
    const message = useRef();


    const handleChangeForm = (e) => {
    }
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

      const validateForm = () => {
        const errors = {};
    
        if (!form.current.from_name.value.trim()) {
          errors.from_name = 'Please enter your name';
        }
    
        const emailValue = form.current.from_email.value.trim();
        if (!emailValue) {
          errors.from_email = 'Please enter your email';
        } else if (!isEmailValid(emailValue)) {
          errors.from_email = 'Please enter a valid email';
        }
    
        if (!form.current.subject.value.trim()) {
          errors.subject = 'Please enter a subject';
        }
        if (!form.current.message.value.trim()) {
          errors.message = 'Please enter your message';
        }
    
        setErrorMessages(errors);
    
        return Object.keys(errors).length === 0;
      };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if(validateForm()){
            emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                setSuccessMessage('Message sent successfully!');
                form.current.reset();
                setTimeout(() => {
                    setSuccessMessage('');
                  }, 5000);
            }, (error) => {
                console.log(error.text);
            });
            console.log(form);
        }

    }

  return (
    <>
         {/* <!-- Contact Start --> */}
        <div className="contact wow fadeInUp" data-wow-delay="0.1s" id="contact" data-aos='zoom-in'>
            <div className="container-fluid">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4"></div>
                        <div className="col-md-8">
                            <div className="contact-form">
                                <div id="success"></div>
                                <form name="sentMessage" id="contactForm" onSubmit={(e) => handleSendMessage(e)} ref={form} novalidate="novalidate">
                                    <div className="control-group">
                                        <input type="text" ref={name} name='from_name' onChange={(e) => handleChangeForm(e)} className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                        <p className="help-block"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="email" ref={email} name='from_email' onChange={(e) => handleChangeForm(e)} className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                        <p className="help-block"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="text" ref={subject} name='subject' onChange={(e) => handleChangeForm(e)} className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                        <p className="help-block"></p>
                                    </div>
                                    <div className="control-group">
                                        <textarea className="form-control" name='message' onChange={(e) => handleChangeForm(e)} ref={message} id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                        <p className="help-block"></p>
                                    </div>
                                    <div>
                                        <button className="btn" type="submit" id="sendMessageButton">Send Message</button>
                                    </div>
                                    {errorMessages && Object.values(errorMessages)[0] && (
                                        <p className='error-message'>{Object.values(errorMessages)[0]}</p>
                                    )}
                                    {successMessage && <p className='success-message'>{successMessage}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Contact End --> */}

    </>
  )
}
