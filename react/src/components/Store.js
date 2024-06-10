const Store =({ products, heading })=> {

    console.log(products)

    return (
        <main className="main" id="storeMain">
            <div className="container">
                <h2>{heading ? heading : 'Our Store'}</h2>
            </div>
        </main>
    )
}

export default Store