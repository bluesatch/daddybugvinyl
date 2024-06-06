const express = require('express')
const router = express.Router()

const { albumDao: dao } = require('../../daos/dao')

router.get('/', (req, res)=> {
    dao.findAll(req, res, dao.table)
})

router.get('/count', (req, res)=> {
    dao.countAll(req, res, dao.table)
})

router.get('/sort', (req, res)=> {
    dao.sort(req, res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.findById(req, res, dao.table)
})

router.post('/create', (req, res)=> {
    dao.create(req, res, dao.table)
})

router.patch('/update', (req, res)=> {
    dao.update(req, res, dao.table)
})

module.exports = router