CREATE TABLE Customer
(
    id INTEGER AUTO_INCREMENT NOT NULL,
    movie VARCHAR(255) NOT NULL,
    number INTEGER NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);