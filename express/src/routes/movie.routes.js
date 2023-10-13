module.exports = (express, app) => {
    const controller = require("../controllers/movie.controller.js");
    const router = express.Router();

    // Get all movies
    router.post("/", controller.all);

    // Get a movie by
    router.get("/:friendlyUrl", controller.getByFriendlyUrl);


    // Add routes to server.
    app.use("/api/movies", router);
}