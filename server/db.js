const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "password",
    host: "172.17.0.1",
    port: 5432,
    database: "perntodo"
})


module.exports = pool