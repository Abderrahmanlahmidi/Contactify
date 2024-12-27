CREATE DATABASE contactiFy;

CREATE TABLE contactify.contacts(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    email VARCHAR(255) UNIQUE,
    numéro_de_téléphone INT NOT NULL
);


INSERT INTO contactiFy.contacts(nom, prenom, email, numéro_de_téléphone)
VALUES
("john", "doe", "johnDoe@gmail.com", "0600000001"),
("jane", "doe", "janeDoe@gmail.com", "0600000002"),
("jack", "roe", "jackRoe@gmail.com", "0600000003")
