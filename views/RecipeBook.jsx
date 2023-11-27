import { useState } from "react";
import RecipesGrid from "../componets/RecipeGrid/RecipesGrid";
import { Search } from "../componets/Search/Search";
import { getUsers } from "../utils/httpClient";

const RecipeBook = ({ user }) => {
    const [searchText, setSearchText] = useState("");
    const handlerSearch = (searchText) => {
        setSearchText(searchText);
    }
    getUsers("users");
    return (
        <section>
            <center>
                <br />
                <h2>Recetario</h2>
                <hr style={{ width: '90%' }} />
                <br />
                <Search handlerSearch={handlerSearch} searchText={searchText} />
                <RecipesGrid searchText={searchText} user={user} />
            </center>
        </section>
    );
}

export default RecipeBook;


