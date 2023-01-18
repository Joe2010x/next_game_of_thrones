import { useState } from "react";
import Trailer from "../components/Trailer";
import styles from '../styles/Home.module.css';
import datas from "../data/trailersList.json";

const Trailers = () => {
    const [trailersYT, setTrailersList] = useState(datas);
    
    return (
        <div className={styles.trailerList}>
            {trailersYT && trailersYT.map((trailer,index) => <Trailer key={index} trailer={trailer}/>)}
        </div>
    )
}

export default Trailers;