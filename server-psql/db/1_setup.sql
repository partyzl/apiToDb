DROP TABLE IF EXISTS phonebook;

CREATE TABLE phonebook (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    age INT NOT NULL,
    phoneNumber VARCHAR(16)
);