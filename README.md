# udemy-fullstack-backend-zero
full-backend-zero


aplication:
docker
dbeaver

mysql2 
CREATE TABLE Users (
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
email varchar(255),
name varchar(255),
city varchar(255)
);

INSERT INTO Users ( email, name , city)
VALUES
  ( 'giacat@gmail.com', 'hoidanit', 'hanoi'),
  ( 'giacat1@gmail.com', 'Gia Cat', 'TPHCM');
  
 SELECT * FROM Users u 
 
 UPDATE Users
SET name = 'gia cat ts', email= 'giacatts@gmail.com', city= 'BinhThuan'
WHERE id = 32;

DELETE FROM Users WHERE id='34';

