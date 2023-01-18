const Trailer =({trailer}) => {
    return (
        <div>
            <h2>{trailer.season}</h2>
            <iframe width="560" height="315" src={trailer.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>
    )
}

export default Trailer;