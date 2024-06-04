const express = require('express')
const router = express.Router()
const port = process.env.port || 3005

const tables = [ 'artist']

// .get()
router.get('/', (req, res)=> {
    res.json({
        'All Albums': `http://localhost:${port}/api/album`,
        'All Apparel': `http://locahost:${port}/api/apparel`,
        'All Artists': `http://localhost:${port}/api/artist`,
        'All Candles': `http://localhost${port}/api/candle`,
        'All Genres': `http://localhost:${port}/api/genre`,
        'All Labels': `http://localhost:${port}/api/label`,
        'All Products': `http://localhost:${port}/api/product`,
        'All Users': `http://localhost${port}/api/user`
    })
})

tables.forEach(table => {
    router.use(`/api/${table}`, require(`./api/${table}Routes`))
})

// .get()
router.get('*', (req, res)=> {
    if (req.url == '/favicon.ico') {
        res.end()
    } else {
        res.send('<h1>404 Error! Page does not exist.</h1>')
    }
})

module.exports = router