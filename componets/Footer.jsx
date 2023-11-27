import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="back text-light py-4" style={{ position: 'Relative',bottom: 0  }}>
      <center className="container">
        <section className="row">
          <section className="col-md-6">
            <h4>Información de contacto</h4>
            <p>324 Calle Principal, Tenerife</p>
            <p>Teléfono: 123-456-7890</p>
            <p>Email: cipeBook@gmail.com</p>
          </section>
          <section className="col-md-6">
            <h4>Acerca de nosotros</h4>
            <p> Proyecto de fin de curso JF</p>
            <FaTwitter/>&nbsp; 
            <FaInstagram/>&nbsp; 
            <FaFacebook/>
          </section>
        </section>
      </center>
      <div className="text-center mt-3">
        <p>© {new Date().getFullYear()} CipeBook. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
