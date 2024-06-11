import { Link } from "react-router-dom"
const Card =(props)=> {

    return (
        <div className="col">
            <div className="card product-card h-100">
                <img src={`/images/${props.imgUrl}`} alt={props.productName} className="img-fluid image card-img-top" />
                <div className="card-body">
                    <h3 className="card-title product-name text-capitalize">{props.productName}</h3>
                    <p className="card-text text-capitalize card-detail">{props.detail}</p>
                    <p className="card-text">Price ${props.price.toFixed(2)}</p>
                </div>
                <footer className="card-footer">
                <button className="btn btn-primary cart-btns text-capitalize d-block mx-auto">add to cart</button>
                </footer>
            </div>
        </div>
    )
}

export default Card