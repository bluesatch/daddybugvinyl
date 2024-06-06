const con = require('../../config/dbconfig')

const labelDao = {
    table: 'label',

    getAlbums: (req, res)=> {
        const id = req.params.id

        con.execute(
            `SELECT al.album_id, al.title, al.yr_released, al.imgUrl,
            ar.firstName, ar.lastName, ar.alias, ar.band, ar.artist_id, l.label
            FROM album al 
            JOIN artist ar USING (artist_id)
            JOIN label l USING (label_id)
            WHERE l.label_id = ${id};`,
            (error, rows)=> {
                if (!error){
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
    },

    sort: (req, res, table)=> {

        con.execute(
            `SELECT * FROM ${table} ORDER BY label;`,
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

module.exports = labelDao