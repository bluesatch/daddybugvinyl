const con = require('../../config/dbconfig')

const artistDao = {
    table: 'artist',

    // getInfo to select album info for artist 
    getInfo: (req, res, table)=> {

        const id = req.params.id
        con.execute(
            `SELECT al.album_id, al.title, al.imgUrl, al.yr_released, al.price, al.rating, ar.band, ar.alias, ar.firstName, ar.lastName, ar.imgUrl
            FROM album al
            JOIN artist ar USING (artist_id)
            WHERE ${table}_id = ${id};`,
            (error, rows)=> {
                if (!error) {
                    res.json(rows)
                } else {
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    },

    sort: (req, res, table)=> {

        con.execute(
            `SELECT * FROM ${table} ORDER BY band, alias, lastName, firstName;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else (
                        res.json(rows)
                    )
                } else {
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    }
}

module.exports = artistDao