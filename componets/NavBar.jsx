import { Link } from "react-router-dom";
import { FaBookmark } from 'react-icons/fa';

const Navbar = ({ element, user }) => {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark back">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <FaBookmark />&nbsp;
                    Cipebook
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/recipebook">
                            Recetario
                        </Link>
                        {
                            !!user ? (<Link className="nav-link" to="/crearReceta">
                                Crear Receta
                            </Link>) : (null)
                        }
                        <Link className="nav-link" to="/contact">
                            Contacto
                        </Link>{
                            !!user && user.roles.includes("Admin") ? (<Link className="nav-link" to="/userList">
                                Administración
                            </Link>) : (null)
                        }
                        {
                            !!user ? (<Link className="nav-link" to="/profile">
                                {user.name}
                            </Link>) : (null)

                        }
                        {
                            element
                        }
                    </div>
                </div>
            </div>
        </nav>

    );

};

export default Navbar;
