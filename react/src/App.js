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
import Genre from './components/Genre'
import GenreSingle from './components/GenreSingle'
import CreateAccount from './components/CreateAccount'
import Login from './components/Login'

const App =()=> {

    /**
     * Initialize state
     */

    const [ albums, setAlbums ] = useState([])
    const [ apparel, setApparel ] = useState([])
    const [ candles, setCandles] = useState([])
    const [ users, setUsers ] = useState([])
    const [ formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
    })

    /**
     * fetch calls
     */

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

    useEffect(()=> {
        const url = 'http://localhost:3005/api/user'

        axios.get(url).then(res => setUsers(res.data))
    }, [])

    

    /**
     * form functionality 
     */
    const handleChange =(event)=> {

        const { name, value } = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit =()=> {

        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if(regex.test(formData.password) === false) {
            alert('Password not valid.\nMust contain:\n-one uppercase letter\n-one lowercase letter\n-one number\n-one special character\n-at leaset 8 charcters')
        } else {
            axios({
                method: 'post',
                url: 'http://localhost:3005/api/user/create',
                data: formData
            })
        }
    }

    return(
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <Routes>
                            <Route path='/' element={ <Home />} />
                            <Route path="/about" element={ <About />} />
                            <Route path="/apparel" element={ 
                                <Store products={ apparel } heading={ 'Apparel' } 
                                />} 
                            />
                            <Route path="/candle" element={ 
                                <Store products={ candles } heading={ 'Candles' } 
                                />}     
                            />
                            <Route
                                path='/createAccount' 
                                element={ <CreateAccount 
                                            formData={formData}
                                            handleChange={handleChange}
                                            handleSubmit={handleSubmit} 
                                        />} 
                            />
                            <Route path='/genre/:id' element={ <GenreSingle />} />
                            <Route path='/login' element={ <Login users={users} />} />
                            <Route path="/vinyl" element={ 
                                <Store products={ albums } heading={ 'Vinyl' } 
                                />} 
                            />
                            <Route path="/vinyl/:id" element={ <AlbumSingle />} />
                            <Route path="/:endpoint/:id" element={ <ProductSingle />} />
                            <Route path="*" element={ <Error404 /> } />
                        </Routes>
                    </div>
                    <div className="col-2">
                        <Genre />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App