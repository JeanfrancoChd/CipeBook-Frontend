import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "../FavButtons/FavButtons.module.css";

function FavDeleteButton({ id }) {
  const API = "http://localhost:8000/api/favorites/";

  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);

    fetch(API + id, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setIsDeleted(true);
        window.location.href = '/profile';
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.container} onClick={handleDelete}>
      {isDeleted ? (
        <p className={styles.message}>
          Has borrado la receta de favoritos :(
        </p>
      ) : (
        <AiOutlineDelete size={24} color={isLoading ? "gray" : "red"} />
      )}
    </div>
  );
}

export default FavDeleteButton;
