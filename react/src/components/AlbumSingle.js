import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const AlbumSingle =()=> {

    const [ album, setAlbum ] = useState({})
    const params = useParams()

    const url = `http://localhost:3005/api/album/${params.id}`

    useEffect(()=> {
        axios.get(url).then(res => setAlbum(res.data))
    }, [])

    // console.log(album)

    return (
        <main className="main" id="albumSingleMain">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="text-danger text-capitalize">{album.title}</h2>
                        <img src={`/images/${album.imgUrl}`} alt={album.title} />
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item text-capitalize">Artist/Band: {album.band || album.alias || `${album.firstName} ${album.lastName}`}</li>
                            <li className="list-group-item text-capitalize">serial: {album.serial_no}</li>
                            <li className="list-group-item text-capitalize">Label: {album.label}</li>
                            <li className="list-group-item text-uppercase">{album.speed} {album.size} {album.sound}</li>
                            <li className="list-group-item text-capitalize">year released: {album.yr_released}</li>
                            <li className="list-group-item">${album.price} USD</li>
                            <li className="list-group-item text-capitalize">store rating: {album.rating}/5</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AlbumSingle