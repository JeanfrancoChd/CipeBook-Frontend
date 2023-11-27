import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { post } from "../utils/httpClient";


const Login = ({ handlerSetUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(post("users/login"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.userData));
        console.log("Token Guardado");
        console.log("Usuario Guardado");
        handlerSetUser();
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Las credenciales no son correctas");
    }
  };

  return (
    <center>
      <article id="wrapper">
        <h2>Iniciar Sesión</h2>
        {error && <p>{error}</p>}
        <form className="form" onSubmit={handleSubmit}>
          <p className="field required half">
            <input className="text-input" type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
          </p>
          <p className="field required half">
            <input className="text-input" type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)
              }
              placeholder="Contraseña"></input>
          </p>
          <p className="field">
            <button className="button" type="submit" > Iniciar Sesión</button>
          </p>
        </form>
        {token && <Navigate to="/profile" state={token} replace={false} />}
      </article>
    </center>


  );
};

export default Login;
