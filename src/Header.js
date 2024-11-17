import React from 'react'

export default function Header() {
  return (
    <>
        {/* Nav Bar Start */}
        <header className="navbar navbar-expand-lg bg-light navbar-light">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">Amine HALAL</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <a href="#home" className="nav-item nav-link active">Home</a>
                        <a href="#about" className="nav-item nav-link">About</a>
                        <a href="#formation" className="nav-item nav-link">Formation</a>
                        <a href="#portfolio" className="nav-item nav-link">Portfolio</a>
                       <a href="#contact" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </div>
        </header>
        {/* Nav Bar End */}
    </>
  )
}
