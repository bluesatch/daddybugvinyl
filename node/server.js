const express = require('express')
const server = express()
const cors = require('cors')
const helmet = require('helmet')
const router = require('./app/routes/router')
const port = process.env.port || 3005

// Security
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
}))

server.use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true}))

// localhost:3005 => router.js 
server.use('/', router)

server.listen(port, ()=> console.log(`Port ${port} is grooving...`))