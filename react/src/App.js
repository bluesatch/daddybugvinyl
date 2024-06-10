import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from './components/About'
import Store from './components/Store'


const App =()=> {

    const [ albums, setAlbums ] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:3005/api/album'

        axios.get(url).then(res => setAlbums(res.data))
    }, [])

    return(
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path="/about" element={ <About />} />
                <Route path="/store" element={ <Store />} />
                <Route path="/apparel" element={ <Store />} />
                <Route path="/candle" element={ <Store />} />
                <Route path="/vinyl" element={ 
                    <Store products={ albums }/>
                    } 
                />
            </Routes>
            <Footer />
        </>
    )
}

export default App