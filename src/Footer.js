import React from 'react'

export default function Footer() {
  return (
    <>
        
        {/* <!-- Footer Start --> */}
        <footer className="footer wow fadeIn" data-wow-delay="0.3s">
            <div className="container-fluid">
                <div className="container">
                    <div className="footer-info">
                        <h2>Amine HALAL</h2>
                        <h3>Hay El Maghreb Arabi, Secteur 4, Hay El Hirafieenne, Temara, Morocco</h3>
                        <div className="footer-menu">
                            <p><a className="wts-contact" rel="noreferrer"  href="https://api.whatsapp.com/send?phone=00212629488721" target='_blank'>+212629488721</a></p>
                            <p><a className="mail-contact" rel="noreferrer"  href="mailto:h.aminehalal.com" target='_blank'>h.aminehalal@gmail.com</a></p>
                        </div>
                        <div className="footer-social">
                            <a href="https://twitter.com/aminenohalal" rel="noreferrer"  target='_blank'><i className="fab fa-twitter"></i></a>
                            <a href="https://www.facebook.com/aminenohalal/" rel="noreferrer"  target='_blank'><i className="fab fa-facebook-f"></i></a>
                            <a href="https://github.com/aminehalal" rel="noreferrer"  target='_blank'><i className="fab fa-github"></i></a>
                            <a href="https://www.instagram.com/amine.halal/" rel="noreferrer"  target='_blank'><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/aminehalal/" rel="noreferrer"  target='_blank'><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="container copyright">
                    <p>&copy; <a href="#home">Amine HALAL</a>, All Right Reserved | Designed By <a rel="noreferrer"  href="https://www.facebook.com/aminenohalal" target='_blank'>Amine Halal</a></p>
                </div>
            </div>
        </footer>
        {/* <!-- Footer End --> */}
    </>
  )
}
