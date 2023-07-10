-- Database: learning_db

-- DROP DATABASE IF EXISTS learning_db;

CREATE DATABASE learning_db
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
	
	
	UPDATE film
	SET rental_rate = 3.99
	WHERE rental_rate < 3.99
	RETURNING film_id, title, rental_rate;