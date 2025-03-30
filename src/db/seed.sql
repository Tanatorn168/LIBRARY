-- Insert data into the authors table
INSERT INTO authors (id, firstName, lastName, affiliation, createdAt, updatedAt) VALUES
(1, 'George', 'Orwell', 'Independent Writer', NOW(), NOW()),
(2, 'Jane', 'Austen', 'British Literature Society', NOW(), NOW()),
(3, 'F. Scott', 'Fitzgerald', 'American Writers Guild', NOW(), NOW()),
(4, 'J.K.', 'Rowling', 'Bloomsbury Publishing', NOW(), NOW()),
(5, 'Harper', 'Lee', 'Independent Writer', NOW(), NOW());

-- Insert data into the books table
INSERT INTO books (id, isbn, title, category, authorId, createdAt, updatedAt) VALUES
(1, '9780451524935', '1984', 'Dystopian', 1, NOW(), NOW()),
(2, '9780141439518', 'Pride and Prejudice', 'Romance', 2, NOW(), NOW()),
(3, '9780743273565', 'The Great Gatsby', 'Classic', 3, NOW(), NOW()),
(4, '9780439139601', 'Harry Potter and the Goblet of Fire', 'Fantasy', 4, NOW(), NOW()),
(5, '9780061120084', 'To Kill a Mockingbird', 'Fiction', 5, NOW(), NOW());

-- Insert data into the members table
INSERT INTO members (id, memberId, firstName, lastName, phoneNumber, createdAt, updatedAt) VALUES
(1, 1001, 'John', 'Doe', '1234567890', NOW(), NOW()),
(2, 1002, 'Jane', 'Smith', '9876543210', NOW(), NOW()),
(3, 1003, 'Alice', 'Johnson', '1122334455', NOW(), NOW()),
(4, 1004, 'Bob', 'Brown', '6677889900', NOW(), NOW()),
(5, 1005, 'Charlie', 'Davis', '5566778899', NOW(), NOW());