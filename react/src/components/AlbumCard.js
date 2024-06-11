const AlbumCard =(props)=> {

    return (
        <div className="col">
            <div className="card album-card h-100">
                <img src={`/images/${props.imgUrl}`} alt={props.productName} className="img-fluid image card-img-top" />
                <div className="card-body">
                    <h3 className="card-title text-capitalize">{props.productName}</h3>
                    <p className="card-text text-capitalize">{props.artist}</p>
                    <p className="card-text">Price: ${props.price.toFixed(2)}</p>
                </div>
                <footer className="card-footer">
                    <button className="btn btn-primary cart-btns text-capitalize">add to cart</button>
                    <button>Click me!</button>
                </footer>
            </div>
        </div>
    )
}

export default AlbumCard