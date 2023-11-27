import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

function FavAddButton({ RecipeId }) {
    const API = "http://localhost:8000/api/favorites";

    const [isLoading, setIsLoading] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const handleAdd = () => {
        setIsLoading(true);

        const data = {
            UserId: JSON.parse(localStorage.getItem("user")).id,
            RecipeId: RecipeId,
        };

        fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setIsAdded(true);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className="favButton"  onClick={handleAdd} style={{ cursor: "pointer" }}>
            {isAdded ? (
                <p style={{ color: "red" }}>Has añadido la receta a favoritos!</p>
            ) : (
                <AiOutlineHeart size={24} color={isLoading ? "gray" : "red"} />
            )}
        </div>
    );
}

export default FavAddButton;
