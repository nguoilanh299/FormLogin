const {Client} = require('pg')
// const { password, database } = require('pg/lib/defaults')
const client = ({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "123",
    database: "login"
})
var pool = new pg.Pool()

// connection using created pool
pool.connect(function(err, client, done) {
  client.query(`select * from account`)
  done()
})

// pool shutdown
pool.end()
