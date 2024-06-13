import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Card from "./Card";

const GenreSingle =()=> {

    const [ albums, setAlbums ] = useState([])
    const [ genre, setGenre ] = useState('')
    const params = useParams()

    let cardComponents

    useEffect(()=> {

        const url = `http://localhost:3005/api/genre/${params.id}`

        axios.get(url).then(res => setAlbums(res.data))

    }, [params.id])

    console.log(albums)

    if (albums.length) {
        cardComponents = albums.map(product => {
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
    }

    return(
        <main className="main" id="genreSingleMain">
            <div className="container">
                <h2 className="text-capitalize text-danger">{albums[0].genre}</h2>
                <div className="row">
                    {cardComponents}
                </div>
            </div>
        </main>
    )
}

export default GenreSingle