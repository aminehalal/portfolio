import React, { useEffect } from 'react';
import me_hero from './assets/img/me_hero.png';
import myCV from './assets/folders/CV_Amine_halal.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/css/about.css'

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const skills = [
    { name: 'PHP & Laravel', percentage: 85 },
    { name: 'JavaScript & React', percentage: 85 },
    { name: 'Excel & Power Bi', percentage: 80 },
    { name: 'SQL & MySQL', percentage: 80 },
    { name: 'Python & Django', percentage: 75 },
    { name: 'Java & Spring Boot', percentage: 70 },
  ];

  return (
    <>
      {/* <!-- About Start --> */}
      <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about" data-aos="zoom-in">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img loading='lazy' src={me_hero} alt="Me" />
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
                  I am a graduate of the Faculty of Science in Rabat and a passionate full-stack developer with a strong interest in data science and analysis. I am constantly expanding my skills and expertise in development and technology, striving to deliver innovative and impactful solutions.                  </p>
                </div>
                <div className="skills">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-name">
                    <div className='skill-name-div'>
                      <p>{skill.name}</p>
                      <p>{skill.percentage}%</p>
                    </div>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={skill.percentage} aria-valuemin="0" aria-valuemax="100" style={{ '--progress-width': `${skill.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <a className="btn" href={myCV} title="CV" download>Download Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
    </>
  );
}
