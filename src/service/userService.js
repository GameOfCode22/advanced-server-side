const userDAO = require("../dao/userDAO");

class UserService {
  static async getUsers(_, res) {
    try {
      const users = await userDAO.getAllUsers();
      if (users.length === 0) {
        return res.status(404).json({
          isSuccess: false,
          message: "No users found",
          users: users,
        });
      }

      return res.status(200).json({
        isSuccess: true,
        message: "Users found",
        users: users,
      });
    } catch (error) {
      console.error("Error in getUsers:", error);
      res.status(500).json({
        error: "Internal server error",
        message: error.message,
      });
    }
  }

  static async getUserId(req, res) {
    try {
      const { id } = req.params;
      const user = await userDAO.getUserById(id);

      if (user == null) {
        return res.status(404).json({
          isSuccess: false,
          message: "User not found with id: " + id,
          user: null,
        });
      } else {
        return res.status(200).json({
          isSuccess: true,
          message: "User found with id: " + id,
          user: user,
        });
      }
    } catch (error) {
      console.error("Error in getUserById:" + id, error);
      res.status(500).json({
        error: "Internal server error",
        message: error.message,
      });
    }
  }

  static async addUser(req, res) {
    try {
      const user = req.body;
      const { name, email, password, gender } = user;

      if (!name || !email || !password || !gender) {
        return res.status(400).json({
          error: "Name, email, password, and gender are required",
        });
      }

      const newUser = await userDAO.createUser(user);

      return res.status(201).json({
        isSuccess: true,
        userId: newUser.id,
      });
    } catch (error) {
      console.error("Error in createUser:", error);
      res.status(500).json({
        error: "Internal server error",
        message: error.message,
      });
    }
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    const { name, password, email, gender, age } = req.body;

    const getUser = await userDAO.getUserById(id);

    if (getUser == null) {
      return res.status(404).json({
        isSuccess: false,
        message: "User not found with id: " + id,
        user: null,
      });
    }

    const updateUser = {
      name: name ? name : getUser.name,
      email: email ? email : getUser.email,
      password: password ? password : getUser.password,
      age: age ? age : getUser.age,
      gender: gender ? gender : getUser.gender,
    };

    await userDAO.updateUser(id, updateUser);
    return res.status(201).json({
      isSuccess: true,
      message: "User is updated",
      user: updateUser,
    });
  }

  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await userDAO.getUserById(id);

      if (user == null) {
        return res.status(404).json({
          isSuccess: false,
          message: "User not found with id: " + id,
          user: null,
        });
      }

      await userDAO.deleteUser(id);
      return res
        .status(200)
        .json({ isSuccess: true, message: "User is deleted" });
    } catch (error) {
      console.error("Error in deleteUser:", error);
      res.status(500).json({
        error: "Internal server error",
        message: error.message,
      });
    }
  }
}

module.exports = UserService;
