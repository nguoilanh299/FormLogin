const {Client} = require('pg')
// const { password, database } = require('pg/lib/defaults')
const client =  new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "123",
    database: "login"
})
client.connect()
.then(()=> console.log("connected successfully"))
.catch(e=>console.log)
.finally(()=> client.end())
