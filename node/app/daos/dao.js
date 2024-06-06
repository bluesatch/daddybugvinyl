const daoCommon = require('./common/daoCommon')

const albumDao = {
    ...daoCommon, ...require('./api/albumDao')
}

const artistDao = {
    ...daoCommon, ...require('./api/artistDao')
}

const apparelDao = {
    ...daoCommon, ...require('./api/apparelDao')
}

const labelDao = {
    ...daoCommon, ...require('./api/labelDao')
}

const genreDao = {
    ...daoCommon, ...require('./api/genreDao')
}

const productDao = {
    ...daoCommon, ...require('./api/productDao')
}

const userDao = {
    ...daoCommon, ...require('./api/userDao')
}

const candleDao = {
    ...daoCommon, ...require('./api/candleDao')
}

module.exports = {
    albumDao,
    apparelDao,
    artistDao,
    labelDao,
    genreDao,
    productDao,
    userDao,
    candleDao
}