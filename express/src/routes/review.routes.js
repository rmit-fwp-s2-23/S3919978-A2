module.exports = (express, app) => {
    const controller = require("../controllers/review.controller.js");
    const router = express.Router();

    // get all reviews by movie id
    router.post("/", controller.getAllByMovieId);

    // create a new review
    router.post("/create", controller.create);

    // Add routes to server.
    app.use("/api/reviews", router);
}