import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'
//import logo from '../images/Game-of-Thrones-1536x864.webp'
import Image from 'next/image';
import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { db, authentication } from '../firebase/firebase-config';
import { signOut } from "firebase/auth";

const Navbar = () => {
    const context = useContext(AppContext);
    const router = useRouter();

    const handleLogOut = () => {

        signOut(authentication)
            .then((re) => {
                console.log(re);
                context.setUserContext({
                    name: 'Guest',
                    loggedIn: false
                });
                console.log('log Out');
                router.push('/logIn')
            })
            .catch((err) => alert(err.message));

    }
    const handleSignIn = (e) => {
        e.preventDefault()
        router.push('/logIn')
        console.log('Sign in');
    }
    return (
        <div >
            <ul className={styles.navbarUl}>
                <li>
                    <Image className={styles.logo} src='/images/Game-of-Thrones-logo.jpg' alt='logo' width={150} height={16} />
                </li>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/newUser'>New User</Link></li>
                <li><Link href='/characters'>Characters</Link></li>
                <li><Link href='/game'>Game</Link></li>
                <li><Link href='/trailers'>Trailers</Link></li>
                <li className={styles.userBlock}>
                    <span>{context.userContext.name}</span>
                    <span className={context.userContext.loggedIn ? styles.logOut : styles.signIn}>{context.userContext.loggedIn ?
                        <div onClick={handleLogOut}>Log Out</div> :
                        <div onClick={handleSignIn}>Sign In</div>
                    }</span>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;