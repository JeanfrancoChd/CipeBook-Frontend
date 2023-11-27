import { TbLoader3 } from 'react-icons/tb';
import styles from "./Loader.module.css";

export function Loader() {
    return (
        <div className={styles.loader}>
            <TbLoader3 className={styles.spinning} size={80}/>
        </div>
    )
}
