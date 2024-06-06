const con = require('../../config/dbconfig')

const userDao = {
    table: 'user',

    sort: (req, res, table)=> {

        con.execute(
            `SELECT * FROM ${table} ORDER BY lastName, firstName;`,
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

module.exports = userDao