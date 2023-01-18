import styles from '../styles/Home.module.css';
import { BiLike, BiDislike } from "react-icons/bi";

const CharacterDetails = ({character}) => {
    return (
        <div>
            <div className={styles.details}>
                <h2>{character.firstName} {character.lastName}</h2>
                <img className={styles.characterImageLarge} src={character.imageUrl} alt='character photo' />
                <br></br>
                <span className={styles.titleAndFamily}><strong><i>Title</i></strong></span>
                <span className={styles.characterContent}>{character.title}</span>
                <br></br>
                <span className={styles.titleAndFamily}><strong><i>Family</i></strong></span>
                <span className={styles.characterContent}>{character.family}</span>

                {/* <div className={styles.infoBar}> */}

                <div className={styles.likeornot}>
                    <div>
                        <BiLike className={styles.likeornoticon} />
                        <span>{character.likes}</span>
                    </div>
                    <div>
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
        </div>
    )
}

export default CharacterDetails