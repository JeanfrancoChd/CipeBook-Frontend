import './App.css';
import RecipeBook from './views/RecipeBook';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Components
import Navbar from "./componets/NavBar";
import Footer from "./componets/Footer";
import { ProtectedRoute } from './componets/ProtectedRoute';
import { RecipeDetails } from "./componets/RecipeDetails/RecipeDetails";

//Views
import Login from './views/Login';
import UserList from './views/UserList';
import Profile from "./views/Profile";
import Register from './views/Register';
import Home from "./views/Home";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import CreateRecipe from "./views/CreateRecipe"
import UserAdminUsers from './views/AdminUsers';


function App() {
  const [user, setUser] = useState(null);
  const handlerSetUser = () => {
    setUser(JSON.parse(localStorage.getItem("user")))
  }
  useEffect(() => {
    !!user ? (console.log("Usuario: " + user.name)) : (handlerSetUser())
  }, [user]);
  const Logout = () => {
    setUser(null);
    localStorage.clear();
  };
  console.log(user);
  return (
    <BrowserRouter>
      <Navbar element={user ? (
        <button className=" fond btn btn-light text-light" onClick={Logout}>Cerrar Sesión</button>) :
        (
          <>
            <Link className="nav-link" to="/login">
              Iniciar Sesión
            </Link>
            <Link className="nav-link" to="/register">
              Registrarse
            </Link>
          </>
        )} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipebook" element={<RecipeBook />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/login" element={<Login handlerSetUser={handlerSetUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />

        {/*RUTAS PARA USUARIOS LOGEADOS*/}
        <Route element={<ProtectedRoute isAuthenticate={!!user} />}>
          <Route path="/crearReceta" element={<CreateRecipe />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/admin" element={<UserAdminUsers />} />
        </Route>
        {/*RUTAS PARA USUARIOS CON ROL ADMINISTRADOR*/}
        <Route element={<ProtectedRoute isAuthenticate={!!user && user.roles.includes("Admin")} />}>
          <Route path="/userList" element={<UserList />} />
        </Route>
        <Route path="*" element={<NotFound message={"La ruta no existe"} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

}




export default App;
