import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const ProductSingle =()=> {

    const [product, setProduct ] = useState({})
    const params = useParams()

    const url = `http://localhost:3005/api/${params.endpoint}/${params.id}`

    useEffect(()=> {
        axios.get(url).then(res => setProduct(res.data))
        
    }, [])

    // console.log(product)

    return (
        <main className="main" id="productSingleMain">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="text-capitalize text-danger">{product.candle || product.apparel}</h2>
                        <img src={`/images/${product.imgUrl}`} alt={product.apparel || product.candle} />
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                {product.color || product.description}
                            </li>
                            <li className="list-group-item text-capitalize">Size: {product.size}</li>
                            <li className="list-group-item">${product.price} USD</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductSingle