import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from './components/About'
import Store from './components/Store'
import Apparel from './components/Apparel'
import Candle from './components/Candle'

const App =()=> {

    return(
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path="/about" element={ <About />} />
                <Route path="/store" element={ <Store />} />
                <Route path="/apparel" element={ <Apparel />} />
                <Route path="/candle" element={ <Candle />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App