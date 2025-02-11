// importrs the express module
const express = require("express");
const userRouter = express.Router();

const PATH = "/api/v1/user";

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
// get all users
userRouter.get(PATH, (_, res) => {
  res.status(200).json({
    isSuccess: true,
    data: users,
  });
});

// get user
userRouter.get(`${PATH}/:id`, (req, res) => {
  const userId = req.params.id;
  const user = users.find((user) => user.id == userId);

  if (user) {
    res.status(200).json({
      isSuccess: true,
      message: `Student find with id: ${userId}`,
      data: user,
    });
  } else {
    return res.status(404).json({
      isSuccess: false,
      message: "Student not found with id: " + userId,
    });
  }
});

// update user
userRouter.put(`${PATH}/:id`, (req, res) => {
  const userId = req.params.id;
  const { name, age, gender, email, phone, address, course, year, gpa } =
    req.body;

  const userIndex = users.findIndex((user) => user.id == userId);

  if (userIndex === -1) {
    return res.status(404).json({
      isSuccess: false,
      message: "Student not found with id: " + userId,
    });
  }

  users[userIndex] = {
    ...users[userIndex], // Keep existing data
    name: name ?? users[userIndex].name,
    age: age ?? users[userIndex].age,
    gender: gender ?? users[userIndex].gender,
    email: email ?? users[userIndex].email,
    phone: phone ?? users[userIndex].phone,
    address: address ?? users[userIndex].address,
    course: course ?? users[userIndex].course,
    year: year ?? users[userIndex].year,
    gpa: gpa ?? users[userIndex].gpa,
  };

  res.status(200).json({
    isSuccess: true,
    message: "Student updated successfully",
    data: users[userIndex],
  });
});

// delete user
userRouter.delete(`${PATH}/:id`, (req, res) => {
  const userId = req.params.id;
  const userIndex = users.find((user) => user.id == userId);

  if (userIndex === -1) {
    return res.status(404).json({
      isSuccess: false,
      message: "Student not found with id: " + userId,
    });
  } else {
    users.splice(userIndex, 1);
    res.status(200).json({
      isSuccess: true,
      message: "Student deleted successfully",
    });
  }
});

// add user
userRouter.post(`${PATH}`, (req, res) => {
  const { name, age, gender, email, phone, address, course, year, gpa } =
    req.body;
  const user = {
    id: users.length + 1,
    name: name && name,
    age: age && age,
    gender: gender && gender,
    email: email && email,
    phone: phone && phone,
    address: address && address,
    course: course && course,
    year: year && year,
    gpa: gpa && gpa,
  };
  users.push(user);
  res.status(201).json({
    isSuccess: true,
    message: "Student added successfully",
    user: user,
  });
});
module.exports = userRouter;
