const con = require('../../config/dbconfig')

const albumDao = {

    table: 'album',

    findById: (req, res, table)=> {
        
        const id = req.params.id 

        con.execute(
            `SELECT al.album_id, al.serial_no, al.title, al.artist_id,
            al.label_id, al.speed, al.sound, al.yr_released, al.size, al.price, al.rating, al.imgUrl, ar.firstName, ar.lastName, ar.band, ar.alias, l.label
            FROM album al
            JOIN artist ar USING (artist_id)
            JOIN label l USING (label_id)
            WHERE al.${table}_id = ${id};`,
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
    },

    sort: (req, res, table)=> {

        con.execute(
            `SELECT * FROM ${table} ORDER BY title;`,
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

module.exports = albumDao