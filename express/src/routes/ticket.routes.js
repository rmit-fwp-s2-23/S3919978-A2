module.exports = (express, app) => {
    const controller = require("../controllers/ticket.controller.js");
    const router = express.Router();

    // Get showing dates by movie Id
    router.post("/create", controller.create);

    // Get all tickets by user email
    router.post("/", controller.getByUserEmail);

    // Add routes to server.
    app.use("/api/tickets", router);
}