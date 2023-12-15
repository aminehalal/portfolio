import React from 'react'
import me_hero from './assets/img/me_hero.png'

function Hero() {
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
                                <h2></h2>
                                <div className="typed-text">Data Analyst & Backend Developer</div>
                            </div>
                            <div className="hero-btn">
                                <a className="btn" href="#contact">Hire Me</a>
                                <a className="btn" href="#contact">Contact Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 d-none d-md-block">
                        <div className="hero-image">
                            <img src={me_hero} alt="Amine Halal"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Hero End --> */}

    </>
  )
}

export default Hero
