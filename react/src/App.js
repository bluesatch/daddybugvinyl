import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from './components/About'
import Store from './components/Store'
import AlbumSingle from './components/AlbumSingle'
import ProductSingle from './components/ProductSingle'
import Error404 from './components/Error404'


const App =()=> {

    const [ albums, setAlbums ] = useState([])
    const [ apparel, setApparel ] = useState([])
    const [ candles, setCandles] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:3005/api/album'

        axios.get(url).then(res => setAlbums(res.data))
    }, [])

    useEffect(()=> {
        const url = 'http://localhost:3005/api/apparel'

        axios.get(url).then(res => setApparel(res.data))
    }, [])

    useEffect(()=> {
        const url = 'http://localhost:3005/api/candle'

        axios.get(url).then(res => setCandles(res.data))
    }, [])

    return(
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path="/about" element={ <About />} />
                <Route path="/apparel" element={ 
                    <Store products={apparel} heading={'Apparel'} 
                    />} 
                />
                <Route path="/candle" element={ 
                    <Store products={candles} heading={'Candles'} 
                    />}     
                />
                <Route path="/vinyl" element={ 
                    <Store products={ albums } heading={'Vinyl'} 
                    />} 
                />
                <Route path="/vinyl/:id" element={ <AlbumSingle />} />
                <Route path="/:endpoint/:id" element={<ProductSingle />} />
                <Route path="*" element={ <Error404 />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App