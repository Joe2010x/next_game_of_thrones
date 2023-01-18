import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { BiLike, BiDislike } from "react-icons/bi";
import Link from 'next/link';
import { authentication, db } from "../firebase/firebase-config";
import { collection, getDocs, setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from 'next/router';
import AppContext from '../context/AppContext';
import { useContext } from 'react';

const CharacterStandard = ({ character }) => {
    const collection_name = 'gameOT';
    const router = useRouter();
    const context = useContext(AppContext);

    const updateQuoteToDb = async (character, likeOrNot) => {

        if (context.userContext.loggedIn) 
        {
            const newRef = doc(db, collection_name, character.firstName + character.lastName);
            if (likeOrNot === 'like')
                await updateDoc(newRef, { likes: character.likes++ });

            if (likeOrNot === 'dislike')
                await updateDoc(newRef, { dislikes: character.dislikes++ });

            router.push('/characters')
        }
        else (alert('Only Signed Users Can Edit!'))
    }


    const handleLike = () => {
        updateQuoteToDb(character, 'like')
    }
    const handleDislike = () => {
        updateQuoteToDb(character, 'dislike')
    }

    return (
        <div className={styles.standard}>
                <Link href={`/characters/${character.firstName}${character.lastName}`}>
                <h2>{character.firstName} {character.lastName}</h2>
                <img className={styles.characterImage} src={character.imageUrl} alt='character photo' />
                <h3><strong><i>Title</i></strong></h3>
                <h3>{character.title}</h3>
                <h3><strong><i>Family</i></strong></h3>
                <h3>{character.family}</h3>

                {/* <div className={styles.infoBar}> */}

        </Link>
                <div className={styles.likeornot}>
                    <div onClick={handleLike}>
                        <BiLike className={styles.likeornoticon} />
                        <span>{character.likes}</span>
                    </div>
                    <div onClick={handleDislike}>
                        <BiDislike className={styles.likeornoticon} />
                        <span>{character.dislikes}</span>
                    </div>
                </div>
                <div>


                    <div className={styles.comments}>
                        <span>Comments {character.comments.length}</span>
                    </div>
                </div>
            </div>
    )
}

export default CharacterStandard;