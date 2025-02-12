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
    return users;
  }
  async getUserById(id) {
    return users.find((user) => user.id == id);
  }
  async createUser(user) {
    user.id = users.length + 1;
    users.push(user);
    return user;
  }
  async updateUser(id, user) {
    const userIndex = users.findIndex((user) => user.id == id);

    users[userIndex] = {
      ...users[userIndex], // Keep existing data
      name: user.name ?? users[userIndex].name,
      age: user.age ?? users[userIndex].age,
      gender: user.gender ?? users[userIndex].gender,
      email: user.email ?? users[userIndex].email,
      phone: user.phone ?? users[userIndex].phone,
      address: user.address ?? users[userIndex].address,
      course: user.course ?? users[userIndex].course,
      year: user.year ?? users[userIndex].year,
      gpa: user.gpa ?? users[userIndex].gpa,
    };

    return users[userIndex];
  }
  async deleteUser(id) {
    const userIndex = users.findIndex((user) => user.id == id);

    users.splice(userIndex, 1);
    return true;
  }
}

module.exports = new UserDAO();
