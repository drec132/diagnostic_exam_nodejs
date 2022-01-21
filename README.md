## Firing up the API
- npm install 
- node start

## To run the API is working
- npm test

## API List
- /api/login (POST)
- /api/users (POST, GET)
- /api/users/:_id (POST, DELETE)

## DB Schema USed
### users
- id: Int,
- first_name: String,
- last_name: String
- address: String
- postcode: String
- contact_number: String
- email: String
- user_name: String
- password: String

### DB Script Creation Script
#### schema creation
```
CREATE DATABASE `practice_schema` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
```

### table creation 
```
CREATE TABLE `users` (
`id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `postcode` varchar(45) DEFAULT NULL,
  `contact_number` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `user_name` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

### insert value
```
INSERT INTO `practice_schema`.`user`
(`first_name`,`last_name`,`address`,`postcode`,`contact_number`,`email`,`user_name`,`password`)
VALUES
("Jones","Jany","3321 Des Me St.","1523","09174283123","jones.jany@email.com","jones.jany","123123"),
("Joseph", "Bartolome",	"3321 Des Me St.", "1511",	"0917123123",	"Joseph.Bartolome@email.com",	"Joseph.Bartolome",	"1231231",),;

```
