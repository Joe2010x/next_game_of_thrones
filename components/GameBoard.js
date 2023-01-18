import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Option from './Option';
import Result from './Result';

const GameBoard =({game}) => {
    const [result, setResult] = useState(null)
    console.log('in Game board, this is game : ', game);
    const handleOptionClick = (index) =>{
        console.log('clicked index ', index);
        (index === 0) ? setResult(true) : setResult(false); 

    }
    return (
        (result === null) ?
        <div className={styles.main}>
            <h1> Who am I ?</h1>
            <div className ={styles.boardGameLayout}>
            <img src = {game[0].imageUrl} alt="game image" />

            <div className={styles.options}>
                {game.map((character,index)=> <Option key = {index} index ={index} option = {character.fullName} handleClick={handleOptionClick}/>)}
            </div>

            </div>
        </div> :
        <div>
            {result !== null && <Result result = {result} />}
        </div>
    
    )
}

export default GameBoard;