
import styles from '../../styles/Home.module.css'
import { db, authentication } from '../../firebase/firebase-config'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from 'react';
import { collection, getDocs, setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import CharacterStandard from '../../components/CharacterStandard';

const Home = () => {

  const [movieList, setMovieList] = useState(null);
  const collection_name = 'gameOT';

  const asyncGetAllCollection = async () => {
    const movie_collection = collection(db, collection_name);
    const movie_snapshot = await getDocs(movie_collection);
    const movie_list = movie_snapshot.docs.map(doc => doc.data());

    console.log(movie_list);
    setMovieList(movie_list);
  }

  useEffect(() => {
    asyncGetAllCollection();
  }, [])

    return (
        <div className={styles.characters}>
            {movieList && movieList.map(movie =><CharacterStandard character={movie} />)}
        </div>
    )
}

export default Home;