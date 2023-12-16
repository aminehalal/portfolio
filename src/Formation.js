import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Formation() {

    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

  return (
    <>      
        {/* <!-- Formation Start --> */}
        <div class="formation" id="formation" data-aos="zoom-in">
            <div class="container">
                <header class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Resume</p>
                    <h2>Formation</h2>
                </header>
                <div class="timeline">
                    <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s" data-aos="fade-right" data-aos-duration="3000">
                        <div class="timeline-text">
                            <div class="timeline-date">2018</div>
                            <h2>Baccalaureate in the Department of Physical Sciences</h2>
                            <h4>Al Nassim High School</h4>
                            <p>
                                At this point I was only interested in physics.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item right wow slideInRight" data-wow-delay="0.1s" data-aos="fade-left" data-aos-duration="3000">
                        <div class="timeline-text">
                            <div class="timeline-date">2018 - 2022</div>
                            <h2>Bachelor's degree in Physics</h2>
                            <h4>Faculty of Science in Rabat</h4>
                            <p>
                                From this I started my career in computer science.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s" data-aos="fade-right" data-aos-duration="3000">
                        <div class="timeline-text">
                            <div class="timeline-date">2022 - Now</div>
                            <h2>Master's degree in Computer Science and Telecommunications</h2>
                            <h4>Faculty of Science in Rabat</h4>
                            <p>
                                Other than what I study, I love discovering new things daily.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        {/* <!-- Formation End --> */}
    </>
  )
}
