import styles from "./Search.module.css";
import {BiSearchAlt2} from "react-icons/bi";


export function Search({handlerSearch,searchText}) {
    const handleSubmit = (e) => {
        e.preventDefault();
      };
    
    const handleChange = (e) =>{    
        let value =  e.target.value;
        handlerSearch(value);
    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <section className={styles.searchBox}>
                <input className={styles.searchInput} type="text" value={searchText} 
                onChange={handleChange}/>
                <div className={styles.searchButton}>
                    <BiSearchAlt2/>
                </div>
            </section>
        </form>
    )
}
