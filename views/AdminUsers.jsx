import React, { useState } from "react";

const UserAdminUsers = () => {
    const API = "http://localhost:8000/api/users/";
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await fetch(API + JSON.parse(localStorage.getItem("user")).id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });
            // La solicitud de actualización del usuario se completó exitosamente
            // Aquí puedes realizar alguna acción adicional, como redirigir a otra página o mostrar una notificación de éxito
            var user = JSON.parse(localStorage.getItem("user"));
            user.name = name;
            localStorage.setItem("user", JSON.stringify(user));
            window.location.href = '/profile';
        } catch (error) {
            // Ocurrió un error al enviar la solicitud de actualización del usuario
            // Aquí puedes manejar el error, mostrar un mensaje de error, etc.
            console.error(error);
        }
    };

    return (
        <center>
            <article id="wrapper">
                <h2>Editar Perfil</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <p className="field required half">
                        <input className="text-input" type="text" id="name" value={name} onChange={handleNameChange} placeholder="Nombre"></input>
                    </p>
                    <p className="field required half">
                        <input className="text-input" type="email" id="email" value={email} onChange={handleEmailChange} placeholder="E-mail"></input>
                    </p>
                    <p className="field required">
                        <input style={{ width: '50%' }} className="text-input" type="password" id="password" value={password} onChange={handlePasswordChange}
                            placeholder="Contraseña"></input>
                    </p>
                    <p className="field">
                        <button className="button" type="submit" >Editar</button>
                    </p>
                </form>
            </article>
        </center>
    );
};


export default UserAdminUsers;

