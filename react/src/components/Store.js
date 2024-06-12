
import Card from "./Card.js"
const Store =({ products, heading })=> {

    // console.log(products)

    let productArr = []

    let cardComponents
 
    for (let i = 0; i < products.length; i++) {
        if (products[i].product_id == 3) { 

            productArr.push(products[i])
            cardComponents = products.map(product => {
                let artist = product.band !== null ? product.band 
                    : product.alias !== null ? product.alias 
                    : `${product.firstName} ${product.lastName}`
                return <Card 
                            key={product.album_id} 
                            id={product.album_id}
                            endpoint={'vinyl'}
                            productName={product.title}
                            price={product.price}
                            detail={artist}
                            imgUrl={product.imgUrl}
                        />
                })
        } else if (products[i].product_id == 1) {
            productArr.push(products[i])
            cardComponents = products.map(product => {
                return <Card 
                            key={product.apparel_id}
                            id={product.apparel_id}
                            endpoint={'apparel'}
                            productName={product.apparel}
                            detail={`Size: ${product.size}`}
                            price={product.price}
                            imgUrl={product.imgUrl}
                        />
            })
        } else if (products[i].product_id == 2) {
            productArr.push(products[i])
            cardComponents = products.map(product => {
                return <Card 
                            key={product.candle_id}
                            id={product.candle_id}
                            endpoint={'candle'}
                            productName={product.candle}
                            detail={`${product.size} oz`}
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
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {cardComponents}
                </div>
            </div>
        </main>
    )
}

export default Store