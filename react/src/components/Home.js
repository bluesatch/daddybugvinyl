import { useState, useEffect } from 'react'
import axios from 'axios'

const Home =()=> {

    const [ featuredAlbum, setFeaturedAlbum ] = useState({})

    const [ today, setToday ] = useState(new Date().getUTCDay())

    // setToday(prevState => prevState.getUTCDay())

    useEffect(()=> {
        
        axios.get('http://localhost:3005/api/album').then(res => {

            const count = res.data.length

            setFeaturedAlbum(res.data[Math.floor(Math.random() * count)])
        })
    }, [today])

    console.log(featuredAlbum)

    return (
        <main className="main" id="main">
            <div className="container">
                <section className="section banner-row">
                    <img src="https://via.placeholder.com/50x50" alt="banner image" className="img-fluid image banner-img rounded" />  
                </section>
                <section className="section">
                    <h2 className="text-center text-capitalize">welcome to our store!</h2>
                </section>
                <section className="section featured-section">
                    <h2 className="text-center text-capitalize text-danger">featured album of the day</h2>
                    <img src={`/images/${featuredAlbum.imgUrl}`} alt={featuredAlbum.title} className="d-block mx-auto featured-album-img rounded" />
                </section>
            </div>
        </main>
    )
}

export default Home