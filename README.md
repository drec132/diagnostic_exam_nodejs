## Firing up the application
- npm install 
- node start

## To run the application is working
- npm test

# API List
- /api/login (POST)
- /api/users (POST, GET)
- /api/users/:_id (POST, DELETE)

# DB Schema
## users
- id: Int,
- first_name: String,
- last_name: String
- address: String
- postcode: String
- contact_number: String
- email: String
- user_name: String
- password: String

# DB Script
CREATE DATABASE `practice_schema` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
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
