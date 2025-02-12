const userDAO = require("../dao/userDAO");

class UserService {
  async getUsers() {
    const users = await userDAO.getAllUsers();

    if (users.length === 0) {
      return {
        isSuccess: false,
        message: "No users found",
        users: users,
      };
    } else {
      return {
        isSuccess: true,
        message: "Users found",
        users: users,
      };
    }
  }
  async getUserId(id) {
    const user = await userDAO.getUserById(id);
    if (user == null) {
      return {
        isSuccess: false,
        message: "User not found with id: " + id,
        user: null,
      };
    } else {
      return {
        isSuccess: true,
        message: "User found with id: " + id,
        user: user,
      };
    }
  }
  async addUser(user) {
    if (user == null) {
      return {
        isSuccess: false,
      };
    }

    const newUser = await userDAO.createUser(user);
    return {
      isSuccess: true,
      user: newUser,
    };
  }
  async updateUser(id, user) {
    const getUser = await userDAO.getUserById(id);
    if (getUser == null) {
      return {
        isSuccess: false,
        message: "User not found with id: " + id,
        user: null,
      };
    }

    const updatedUser = await userDAO.updateUser(id, user);
    return {
      isSuccess: true,
      message: "User is updated",
      user: updatedUser,
    };
  }
  async deleteUser(id) {
    const user = await userDAO.getUserById(id);
    if (user == null) {
      return {
        isSuccess: false,
        message: "User not found with id: " + id,
        user: null,
      };
    }
    var isSuccess = await userDAO.deleteUser(id);
    return {
      isSuccess: isSuccess,
    };
  }
}

module.exports = new UserService();
