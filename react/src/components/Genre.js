import { useState, useEffect } from "react";
import axios from "axios";

const Genre =()=> {

    const [ genres, setGenres] = useState([])

    useEffect(()=> {

        const url = 'http://localhost:3005/api/genre/sort'
        axios.get(url).then(res => setGenres(res.data))
    }, [])

    console.log(genres)
    const genreItems = genres.map(genre => {
        return <li className="list-group-item">{genre.genre}</li>
    })

    return (
        <aside className="aside genre-aside overflow-y-scroll" id="genreAside">
            <ul className="list-group list-group-flush genre-list">
                {genreItems}
            </ul>
        </aside>
    )
}

export default Genre