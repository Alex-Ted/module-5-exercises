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
	
	
	SELECT
  film_id,
  CONCAT(title, ' (', rating, ')') AS poster_title,
  description
	FROM
  film
	ORDER BY
  poster_title DESC
	LIMIT 20;
