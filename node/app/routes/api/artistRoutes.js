const express = require('express')
const router = express.Router()

const { artistDao: dao } = require('../../daos/dao')

router.get('/', (req, res)=> {
    dao.findAll(req, res, 'artist')
})

module.exports = router