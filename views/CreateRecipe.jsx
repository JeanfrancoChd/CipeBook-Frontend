import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";
import { post } from "../utils/httpClient";
import InputFile from "../componets/InputFile";

const RecipeForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [difficult, setDifficult] = useState("");
  const [time, setTime] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [image, setImage] = useState(null);
  const [redirectToLogin, setRedirectToLogin] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDifficultChange = (event) => {
    setDifficult(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleIngredientesChange = (event) => {
    setIngredientes(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("id", jwt_decode(localStorage.getItem("token")).userId);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("difficult", difficult);
    formData.append("time", time);
    formData.append("ingredientes", ingredientes);
    formData.append("image", image);

    try {
      await fetch(post("recipes"), {
        method: "POST",
        body: formData,
      });
      setRedirectToLogin(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="createRecipe">
      <center>
        <article id="wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <h2>Crear una receta</h2>
            <p className="field required half">
              <input className="text-input" type="text" id="name" value={name} onChange={handleNameChange} required placeholder="Nombre"></input>
            </p>
            <p className="field required half">
              <input className="text-input" type="text" id="time" value={time} onChange={handleTimeChange} required placeholder="Tiempo"></input>
            </p>
            <p className="field">
              <textarea className="textarea" cols="50" type="text" id="description" value={description} onChange={handleDescriptionChange} placeholder="Elaboración" rows="4"></textarea>
            </p>
            <p className="field">
              <textarea className="textarea" cols="50" type="text" id="ingredientes" value={ingredientes} onChange={handleIngredientesChange} placeholder="Ingredientes" rows="4"></textarea>
            </p>
            <InputFile handleImageChange={handleImageChange} />
            <p className="field">
              <select id="difficult" value={difficult} onChange={handleDifficultChange} required>
                <option value="" selected disabled hidden>Dificultad</option>
                <option value='Alta'>Alta</option>
                <option value='Media'>Media</option>
                <option value='Baja'>Baja</option>
              </select>
            </p>
            <p className="field">
              <button className="button" type="submit" >Subir Receta</button>
            </p>
          </form>
          {redirectToLogin && <Navigate to="/profile" state={redirectToLogin} replace={false} />}
        </article>
      </center>
      <br />
      <br />
    </section>
  );
};

export default RecipeForm;
