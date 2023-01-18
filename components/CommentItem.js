import styles from '../styles/Home.module.css';
const CommentItem = ({comment}) => {
    return (
        <div className={styles.commentItem}>
            <span className={styles.commentItemName}>{comment.name}</span>
            <p className={styles.commentItemComment}>{comment.comment}</p>
        </div>
    )
}

export default CommentItem;