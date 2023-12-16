import React, { useEffect } from 'react'
import me_hero from './assets/img/me_hero.png'
import myCV from './assets/folders/CV2024.pdf'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function About() {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

  return (
    <>
          {/* <!-- About Start --> */}
        <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about" data-aos = 'zoom-in'>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={me_hero} alt="Image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-header text-left">
                                <p>Learn About Me</p>
                                <h2>ِCoding for fun.</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    I am a student at the Faculty of Science in Rabat. I am very impressed with data science and its analysis, and I am trying to develop myself in this field day after day.
                                </p>
                            </div>
                            <div className="skills">
                                <div className="skill-name">
                                    <p>Excel & Power Bi</p><p>80%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>SQL & MySQL</p><p>80%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>Python & Django</p><p>80%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>PHP & Laravel</p><p>75%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>Java & Spring Boot</p><p>70%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <a className="btn" href={myCV} title="CV" download>Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}
      
    </>
  )
}
