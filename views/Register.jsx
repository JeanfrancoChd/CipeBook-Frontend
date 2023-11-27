import React, { useState } from 'react';
import { post } from "../utils/httpClient";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");


  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(post("users/register"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          roles: "User"
        }),
      });

      const data = await response.json();
      console.log(data);
      setName('');
      setEmail('');
      setPassword('');
      window.location.href = '/login';
    } catch (error) {
      setError("Ha ocurrido un error con la peticion de registro");
    }
  };

  return (
    <center>
      <article id="wrapper">
        <h2>Registro</h2>
        {error && <p>{error}</p>}
        <form className="form" onSubmit={handleRegister}>
          <p className="field required half">
            <input className="text-input" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Nombre"></input>
          </p>
          <p className="field required half">
            <input className="text-input" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required
              placeholder="E-mail"></input>
          </p>
          <p className="field required">
            <input  style={{ width: '50%' }} className="text-input" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required
              placeholder="Contraseña"></input>
          </p>
          <p className="field">
            <button className="button" type="submit" >Registrar</button>
          </p>
        </form>
      </article>
    </center>
  );
};

export default Register;
