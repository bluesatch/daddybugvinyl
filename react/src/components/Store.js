import AlbumCard from "./AlbumCard"
import ProductCard from "./ProductCard,js"
const Store =({ products, heading })=> {

    console.log(products)

    let productArr = []

    let cardComponents
 
    for (let i = 0; i < products.length; i++) {
        if (products[i].product_id == 3) { 

            productArr.push(products[i])
            cardComponents = products.map(product => {
                let artist = product.band !== null ? product.band 
                    : product.alias !== null ? product.alias 
                    : `${product.firstName} ${product.lastName}`
                return <AlbumCard 
                            key={product.album_id} 
                            id={product.album_id}
                            productName={product.title}
                            price={product.price}
                            artist={artist}
                            imgUrl={product.imgUrl}
                        />
                })
        } else if (products[i].product_id == 1) {
            productArr.push(products[i])
            cardComponents = products.map(product => {
                return <ProductCard 
                            key={product.apparel_id}
                            productName={product.apparel}
                            price={product.price}
                            imgUrl={product.imgUrl}
                        />
            })
        }
    }

    return (
        <main className="main" id="storeMain">
            <div className="container">
                <h2>{heading ? heading : 'Our Store'}</h2>
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {cardComponents}
                </div>
            </div>
        </main>
    )
}

export default Store