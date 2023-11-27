import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../../utils/httpClient";
import styles from "./RecipeDetails.module.css";
import { Loader } from "../Loader/Loader";
import FavAddButton from "../FavButtons/FavAddButton";



export function RecipeDetails() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [recipe, setRecipe] = useState(null);
    useEffect(() => {
        setIsLoading(true);
        get("recipes/" + id)
            .then(data => {
                setIsLoading(false);
                setRecipe(data);
            });
    }, [id]);

    if (isLoading) {
        return <Loader />
    }

    if (!recipe) {
        return null;
    }

    const imageUrl = "http://localhost:8000/" + recipe.image.replace(/^uploads\\/, '');
    return (
        <>
            <div className={styles.detailsContainer}>
                <img className={`${styles.col} ${styles.recipeImage}`} src={imageUrl} alt={recipe.name} />
                <div className={`${styles.col} ${styles.movieDetails}`}>
                    <h2 className={styles.firtsItem}> Nombre: {recipe.name}</h2>
                    <hr />
                    <br />
                    <p>-Elaboración: {recipe.description}</p>
                    <p>-Dificultad: {recipe.difficult}</p>
                    <p>-Ingredientes: {recipe.ingredients} </p>
                    <p>-Tiempo: {recipe.time} </p>
                    {!!localStorage.getItem("user") ? (<FavAddButton RecipeId={recipe.id} />) : (console.log("Nouser"))}

                </div>
            </div>
            <center>
                <h2>Video Elaboración</h2>
                <hr style={{ width: '90%' }} />
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/lYsjGEdVwY0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <hr style={{ width: '90%' }} />
            </center>
        </>
    )
}