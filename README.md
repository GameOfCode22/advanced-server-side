# Advanced Server-Side - User Management

## Database Setup

### Create `users` Table

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 0),
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
### Insert values to `users` Table
```sql
INSERT INTO users (name, age, gender, email, password) VALUES
('John Doe', 25, 'Male', 'johndoe@example.com', 'hashed_password1'),
('Jane Smith', 30, 'Female', 'janesmith@example.com', 'hashed_password2'),
('Alice Johnson', 28, 'Female', 'alicejohnson@example.com', 'hashed_password3'),
('Bob Williams', 35, 'Male', 'bobwilliams@example.com', 'hashed_password4'),
('Charlie Brown', 22, 'Male', 'charliebrown@example.com', 'hashed_password5'),
('David Miller', 40, 'Male', 'davidmiller@example.com', 'hashed_password6'),
('Emma Davis', 27, 'Female', 'emmadavis@example.com', 'hashed_password7'),
('Frank Wilson', 33, 'Male', 'frankwilson@example.com', 'hashed_password8'),
('Grace Taylor', 26, 'Female', 'gracetaylor@example.com', 'hashed_password9'),
('Henry Moore', 31, 'Male', 'henrymoore@example.com', 'hashed_password10'),
('Ivy Clark', 29, 'Female', 'ivyclark@example.com', 'hashed_password11'),
('Jack White', 34, 'Male', 'jackwhite@example.com', 'hashed_password12'),
('Kathy Harris', 24, 'Female', 'kathyharris@example.com', 'hashed_password13'),
('Leo Martin', 37, 'Male', 'leomartin@example.com', 'hashed_password14'),
('Mia Lewis', 23, 'Female', 'mialewis@example.com', 'hashed_password15'),
('Nathan Young', 32, 'Male', 'nathanyoung@example.com', 'hashed_password16'),
('Olivia King', 26, 'Female', 'oliviaking@example.com', 'hashed_password17'),
('Paul Allen', 38, 'Male', 'paulallen@example.com', 'hashed_password18'),
('Quinn Scott', 29, 'Other', 'quinnscott@example.com', 'hashed_password19'),
('Rachel Adams', 27, 'Female', 'racheladams@example.com', 'hashed_password20');
```

🚀 How to Use
1️⃣ Run the CREATE TABLE query first to set up the users table.
2️⃣ Then, execute the INSERT query to add sample users.
3️⃣ Your database is now ready to use! 🎉