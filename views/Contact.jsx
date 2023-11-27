import { useState } from 'react';
import Map from '../componets/Map';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section>
      <center>
        <article id="wrapper">
          <h2>Contacta con Nosotros</h2>
          <form className="form" onSubmit={handleSubmit}>
            <p className="field required half">
              <input
                className="text-input"
                id="name"
                name="name"
                required
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </p>
            <p className="field required half">
              <input
                className="text-input"
                id="email"
                name="email"
                required
                type="email"
                placeholder="E-Mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </p>
            <p className="field">
              <textarea
                className="textarea"
                cols="50"
                id="message"
                name="message"
                placeholder="Mensaje"
                rows="4"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
            </p>
            <p className="field">
              <input className="button" type="submit" value="Enviar Mensaje" />
            </p>
          </form>
          {submitted && <p style={{ color: 'red' }}>Gracias por contactar con nosotros!</p>}
        </article>
      </center>
      <Map />
    </section>
  );
};

export default Contact;
