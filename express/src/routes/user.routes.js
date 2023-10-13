module.exports = (express, app) => {
    const controller = require("../controllers/user.controller.js");
    const router = express.Router();

    // Create a new user
    router.post("/", controller.create);

    // Update user details
    router.post("/update", controller.update);

    // Login
    router.post("/login", controller.login);

    // Add routes to server.
    app.use("/api/users", router);
}