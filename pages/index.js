import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { db, authentication } from '../firebase/firebase-config'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from 'react';
import { datas } from '../data/game_of_throne'
import { collection, getDocs, setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import uuid from 'react-uuid';
import Character from '../components/CharacterDetails';

export default function Home() {

  const addNewcharacterToDb = async (character) => {
    await setDoc(doc(db, collection_name, character.firstName + character.lastName),
      {
        id: character.id,
        firstName: character.firstName,
        lastName: character.lastName,
        fullName: character.fullName,
        title: character.title,
        family: character.family,
        image: character.image,
        imageUrl: character.imageUrl,
        likes: 0,
        dislikes: 0,
        comments: [],
      })
  }

  return (
    <div className={styles.container}>


      <main className={styles.main}>
        <Image src='/images/throne-game-of-thrones.gif' alt='game-of-thrones-intro' width={300} height={450} />
        <img className={styles.logoGT} src='/images/Logo_Game_of_Thrones.png' alt='Logo'/>
        <h2>Characters Site</h2>
      </main>



    </div>
  )
}
