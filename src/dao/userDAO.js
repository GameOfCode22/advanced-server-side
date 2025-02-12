const pool = require("../config/database");

var users = [
  {
    id: 1,
    name: "John Doe",
    age: 22,
    gender: "Male",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    course: "Software Engineering",
    year: "Final Year",
    gpa: 3.8,
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 21,
    gender: "Female",
    email: "janesmith@example.com",
    phone: "+1 987 654 321",
    address: {
      street: "456 Elm St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
    },
    course: "Computer Science",
    year: "Third Year",
    gpa: 3.9,
  },
  {
    id: 3,
    name: "Michael Brown",
    age: 23,
    gender: "Male",
    email: "michaelbrown@example.com",
    phone: "+1 555 123 456",
    address: {
      street: "789 Oak St",
      city: "Chicago",
      state: "IL",
      zip: "60601",
    },
    course: "Data Science",
    year: "Final Year",
    gpa: 3.7,
  },
  {
    id: 4,
    name: "Emily Johnson",
    age: 20,
    gender: "Female",
    email: "emilyjohnson@example.com",
    phone: "+1 666 789 101",
    address: {
      street: "101 Maple St",
      city: "San Francisco",
      state: "CA",
      zip: "94101",
    },
    course: "Artificial Intelligence",
    year: "Second Year",
    gpa: 3.85,
  },
];

class UserDAO {
  async getAllUsers() {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
  }
  async getUserById(id) {
    const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
  }
  async createUser(user) {
    const { name, age, gender, email, password } = user;
    const [result] = await pool.query(
      "INSERT INTO users (name, age, gender, email, password) VALUES (?, ?, ?, ?, ?)",
      [name, age, gender, email, password]
    );
    return { id: result.insertId };
  }
  async updateUser(id, user) {
    const { name, email, password, gender, age } = user;
    await pool.query(
      "UPDATE users SET name = ?, email = ?, password = ?,  gender = ?,  age = ? WHERE id = ?",
      [name, email, password, gender, age, id]
    );
  }
  async deleteUser(id) {
    await pool.query("DELETE FROM users WHERE id = ?", [id]);
  }
}

module.exports = new UserDAO();
