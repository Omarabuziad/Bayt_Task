CREATE DATABASE bayt;

USE bayt;


CREATE TABLE roles (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  nameArabic VARCHAR(255) UNIQUE NOT NULL,
  nameEnglish VARCHAR(255) UNIQUE NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE permissions (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  permissionName VARCHAR(255),
  permissionDesc VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE roles_permissions (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  role_id INT,
  permission_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES roles(id),
  FOREIGN KEY (permission_id) REFERENCES permissions(id)
);

CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  contact_number VARCHAR(255) , 
  PRIMARY KEY (id)
);

CREATE TABLE users_roles (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  role_id INT,
  user_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES roles(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);


