var mysql = require("mysql");

var local_config = {
    host: "localhost",
    port: 3306,
    user: "test_user",
    password: "password",
    database: "burgers_db"
}

var connection = mysql.createConnection(process.env.DATABASE_URL || local_config);

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack)
        return;
    }
    console.log("connected as id: " + connection.threadId)
})

module.exports = connection;