import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import styles from '../styles/Home.module.css'
import { db, authentication } from '../firebase/firebase-config'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
import { useRouter } from "next/router";

const LogIn = () => {
    const context = useContext(AppContext);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const router = useRouter();

    const handleUserLogin = () => {
        console.log('user Login');
        if (context.userContext.loggedIn === false) {
            // handle log in
            console.log(email, password);
            signInWithEmailAndPassword(authentication, email, password)
                .then((re) => {
                    console.log(re);
                    context.setUserContext({
                        name: re.user.displayName,
                        loggedIn: true
                    })
                    router.push('/characters')
                })
                .catch((err) => alert(err.message));
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.logInAndNewUser}>
                <p>Email</p>
                <input className={styles.input} placeholder='Please Enter Your Email.' onChange={e => setEmail(e.target.value)} />
                <p>Password</p>
                <input className={styles.input} onChange={e => setPassword(e.target.value)} placeholder='Please Enter Your Password' />
                <br></br>
            </div>
            <button className={styles.btnLarge} onClick={handleUserLogin}>Log In</button>

        </div>
    )
}

export default LogIn;