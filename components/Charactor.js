const Charactor = ({charactor}) => {
    return (
        <div>
            <img src={charactor.imageUrl} />
            <h1>{`${charactor.firstName} ${charactor.lastName}`}</h1>
        </div>
    )
}

export default Charactor