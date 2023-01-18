import datas from '../data/game_of_throne';
import styles from '../styles/Home.module.css'
import { db, authentication } from '../firebase/firebase-config'
import { useEffect, useState } from 'react';
import { collection, getDocs, setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import GameBoard from '../components/GameBoard';

const Game = () => {
    const game_set = 5;
    // one correct Option, 3 wrong Option
    const [gameOptions,setGameOptions] = useState(null);

    const [movieList, setMovieList] = useState(null);
    const collection_name = 'gameOT';
  
    const asyncGetAllCollection = async () => {
      const movie_collection = collection(db, collection_name);
      const movie_snapshot = await getDocs(movie_collection);
      const movie_list = movie_snapshot.docs.map(doc => doc.data());
  
      console.log(movie_list);
      setMovieList(movie_list);
      return (movie_list);
    }

    const createGameSet = (game_set,movie_list) => {
        // console.log('inside create game, movieList is : ', movie_list);
        const numOfOptions = 4
        let index =-1;
        let game_options = [];
        let length = movie_list.length;
        for (let i = 0; i<numOfOptions; i++) {
            let newOption = false;
            while (!newOption) {
                index = Math.floor(Math.random()*length);
                newOption = true;
                if (game_options.length>0) {

                    game_options.forEach(element => {
                        // console.log('element is: ',element);
                        if (element.id === movie_list[index].id) {
                            newOption = false;
                            console.log('identical',element.firstName,movie_list[index].firstName)
                        }
                    });
                }
                
            }
            
            game_options.push(movie_list[index]);
            index = -1;

        }
        // console.log('game Options: ',game_options)
        setGameOptions(game_options);
    }
  
    useEffect(() => {
      asyncGetAllCollection()
        .then((re)=> 
        createGameSet(game_set,re)
        )
    }, [])

    

    return (
        <div>
            {gameOptions && <GameBoard game = {gameOptions} />}
        </div>
    )
} 

export default Game;