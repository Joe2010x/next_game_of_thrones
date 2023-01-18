import styles from '../styles/Home.module.css';

import Confetti from 'react-confetti'
import React, { useState, useRef, useEffect } from "react";


const Result = ({ result }) => {
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const confetiRef = useRef(null);
  
    useEffect(() => {
      setHeight(confetiRef.current.clientHeight);
      setWidth(confetiRef.current.clientWidth);
    }, []);
  
    return (
        <div>
            <div className='confettie-wrap' ref = {confetiRef}>

            <h1 className={styles.main}>{result ? "You Won !" : "You Lose !"}</h1>
            <Confetti numberOfPieces={150}
                width={width}
                height={height}
                />
                </div>
        </div>
    )
}

export default Result;