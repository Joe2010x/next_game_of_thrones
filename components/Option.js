import styles from '../styles/Home.module.css';

const Option =({option, index, handleClick}) => {
    const onClicked =(index) => {
        
        handleClick(index);
    }
    return (
        <div className={styles.option} onClick={()=>{onClicked(index)}}>
            <span >{option}</span>
        </div>
    )
}

export default Option;