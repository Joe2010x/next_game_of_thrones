import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { useState } from "react";

import styles from '../styles/Home.module.css'
import { db, authentication } from '../firebase/firebase-config'
import { useRouter } from "next/router";

const NewUser = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [displayName, setDisplayName] = useState(null);
    // const auth = getAuth();
    const router = useRouter();

    const handleCreateNew = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            }).then(() => {
                console.log('displayName is ', displayName)
                updateProfile(auth.currentUser, {
                    "displayName": displayName
                })
                // Profile updated!
                // ...
                //message created 
                // redirect to front page
            }).then((re => {
                console.log('profile updated');
                router.push('/');
            }))

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    return (
        <div className={styles.main}>
            <div className={styles.logInAndNewUser}>

                <p>Display Name</p>
                <input className={styles.input} placeholder='Please Enter Your Display Name.' onChange={e => setDisplayName(e.target.value)} />
                <p>Email</p>
                <input className={styles.input} placeholder='Please Enter Your Email.' onChange={e => setEmail(e.target.value)} />
                <p>Password</p>
                <input className={styles.input} onChange={e => setPassword(e.target.value)} placeholder='Please Enter Your Password' />
                <br></br>

            </div>
            <button className={styles.btnLarge} onClick={handleCreateNew}>Create A New User</button>
        </div>
    )
}

export default NewUser;