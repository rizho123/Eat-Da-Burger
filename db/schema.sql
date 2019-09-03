CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT auto_increment NOT NULL,
    burger_name VARCHAR(300) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);

