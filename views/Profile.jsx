import profile from "../assets/img/profile.png"
import RecipesGrid from "../componets/RecipeGrid/RecipesGrid";
import { useEffect, useState } from "react";
import { getUsers } from "../utils/httpClient";
import FavoritesGrid from "../componets/FavoritesGrid";
import { Link } from "react-router-dom";


const Profile = () => {

    const [users, setUsers] = useState([]);
    const handlerGetUsers = async () => {
        const response = await getUsers("users/" + JSON.parse(localStorage.getItem("user")).id)
        const data = await response;
        setUsers(data);
    };
    useEffect(() => {
        handlerGetUsers();
    }, []);

    return (
        <>
            <center>
                <br />
                <h2>Información del Usuario</h2>
                <hr style={{ width: '90%' }} />
                <br />
                <Link to={"/profile/admin"}>
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <br />
                            <img src={profile} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{users.name}</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Architecto autem necessitatibus sit laborum quas itaque beatae maxime magni
                                    aperiam sunt eum molestiae facere suscipit error doloribus, quaerat magnam earum adipisci?
                                </p>
                                <p className="card-text">
                                    <small className="text-body-secondary">Ultima receta publicada: {new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
                <h2>Mis recetas</h2>
                <hr style={{ width: '90%' }} />
                <RecipesGrid userId={users.id} />
                <h2>Favoritos</h2>
                <hr style={{ width: '90%' }} />
                <FavoritesGrid />
            </center>


        </>
    );

};

export default Profile;
