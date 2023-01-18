import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";
import AppContext from "../../context/AppContext";
import CharacterDetails from "../../components/CharacterDetails";
import styles from '../../styles/Home.module.css';
import { authentication, db } from "../../firebase/firebase-config";
import { collection, getDocs, setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import CommentItem from "../../components/CommentItem";

const Comments = () => {
    const router = useRouter();
    const { id } = router.query;
    const [character, setCharacter] = useState(null);
    const collection_name = 'gameOT';
    const context = useContext(AppContext);
    const [newComment,setNewComment] = useState( {name:context.userContext.name, comment:''});
    const [showComments, setShowComments] = useState(context.userContext.loggedIn);
    const [input, setInput] = useState('');

    const getOneDoc = async (id) => {

        const docRef = doc(db, collection_name, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data retrived", docSnap.data());
            setCharacter(docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    const updateCommentToDoc = async (newComment) => {
        const newRef = doc(db, collection_name, id);
        await updateDoc(newRef, {
            comments: character.comments.concat(newComment)
        });
    }

    useEffect(() => {
        console.log('id is : ', id)
        getOneDoc(id).then(()=>
            console.log('useEffect', character)
            // updateCommentToDoc({name:'James',comment:'What a life!'});}
        );

    }, [])

    const addComment = () => {
        console.log('retrived input', input);
        //newComment = input;
        updateCommentToDoc({
            name: context.userContext.name,
            comment: input
        });
        getOneDoc(id);
    }
    return (
        <div className={styles.trailerList}>
            {character && <CharacterDetails character={character}/>}
            {(showComments && character) && 
            <div>
                {character.comments.map((comment, index)=> <CommentItem key={index} comment ={comment} />)}
                <br></br>

                <div className={styles.newComment} >
                    <span className={styles.newCommentName}>{newComment.name}</span>
                    <input onChange={(e)=>setInput(e.target.value)} className={styles.newCommentComment}></input>
                </div>
                <button onClick={addComment} className={styles.btnLarge}>Submit Comment</button>
            </div>
                }
        </div>
    )
}

export default Comments;