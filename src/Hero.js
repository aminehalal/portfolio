import React, { useState, useEffect } from 'react';
import me_hero from './assets/img/me_hero.png';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textArray = ["Data Analyst", "Backend Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentText = textArray[currentTextIndex];
      const currentLength = displayText.length;

      if (currentLength < currentText.length) {
        setDisplayText(prevText => prevText + currentText[currentLength]);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentTextIndex((currentTextIndex + 1) % textArray.length);
          setDisplayText('');
        }, 1000); // Delay before switching to the next text
      }
    }, 100); // Adjust the speed of typing here (milliseconds)

    return () => clearInterval(interval);
  }, [currentTextIndex, displayText, textArray]);

  return (
    <>
      {/* <!-- Hero Start --> */}
      <div className="hero" id="home">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
              <div className="hero-content">
                <div className="hero-text">
                  <p>I&apos;m</p>
                  <h1>Amine HALAL</h1>
                  <h2>
                    {displayText.split('').map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}
                  </h2>
                </div>
                <div className="hero-btn">
                  <a className="btn" href="#contact">Hire Me</a>
                  <a className="btn" href="#contact">Contact Me</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 d-none d-md-block">
              <div className="hero-image">
                <img src={me_hero} alt="Amine Halal" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}
    </>
  );
}

export default Hero;
