const con = require('../../config/dbconfig')

const apparelDao = {
    table: 'apparel',

    sort: (req, res, table)=> {

        con.execute(
            `SELECT * FROM ${table} ORDER BY type;`,
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

module.exports = apparelDao