const con = require('../../config/dbconfig')

const candleDao = {
    table: 'candle',

    sort: (req, res, table)=> {

        con.execute(
            `SELECT * FROM ${table} ORDER BY candle;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    }
}

module.exports = candleDao