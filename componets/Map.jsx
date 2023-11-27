import React from 'react';

const Map = () => {
  return (
    <center>
      <iframe
      title='Localizacion'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.8827959091!2d-118.74138312626019!3d34.020039238300356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20%C3%81ngeles%2C%20California%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1684334184406!5m2!1ses!2ses"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </center>
  );
};

export default Map;
