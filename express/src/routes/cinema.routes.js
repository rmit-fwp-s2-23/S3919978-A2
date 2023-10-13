module.exports = (express, app) => {
    const controller = require("../controllers/cinema.controller.js");
    const router = express.Router();

    // Get all cinemas
    router.get("/", controller.all);


    // Add routes to server.
    app.use("/api/cinemas", router);
}