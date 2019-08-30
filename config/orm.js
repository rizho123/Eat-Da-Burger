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
        array.push(key + "=" + ob[key]);
    }
}

