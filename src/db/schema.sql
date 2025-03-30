-- Create the authors table
CREATE TABLE authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    affiliation VARCHAR(255),
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

-- Create the books table
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    isbn VARCHAR(255) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    authorId INT NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (authorId) REFERENCES authors(id)
);

-- Create the members table
CREATE TABLE members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    memberId INT NOT NULL UNIQUE,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(15),
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);