var connection = require("./connection.js");

function printQuestionMarks(number) {
    var array = [];

    for (var i = 0; i < number; i++) {
        array.push("?");
    }

    return array.toString();
};

function objectToSql(object) {
    var array = [];

    for (var key in object) {
        array.push(key + "=" + object[key]);
    }

    return array.toString();
};

var orm =  {
    all: function(tableInput, cb) {
        var query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        })
    },

    create: function(table, cols, vals, cb) {
        var query = "INSERT INTO " + table;

        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuestionMarks(vals.length);
        query += ") ";

        console.log(query);

        connection.query(query, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result)
        })
    },

    update: function(table, ColumnsValues, condition, cb) {
        var query = "UPDATE " + table;

        query += " SET ";
        query += objectToSql(ColumnsValues);
        query += " WHERE ";
        query += condition;

        console.log(query);
        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        })
    },

    delete: function(table, condition, cb) {
        var query = "DELETE FROM " + table;

        query += " WHERE ";
        query += condition;

        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result)
        })
    }
};

module.exports = orm;


