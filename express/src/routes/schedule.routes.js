module.exports = (express, app) => {
    const controller = require("../controllers/schedule.controller.js");
    const router = express.Router();

    // Get showing dates by movie Id
    router.post("/dates", controller.getDatesByMovieId);


    // Get times by date, movie id and cinema id
    router.post("/times", controller.getTimesByDateAndMovieId);

    

    // Add routes to server.
    app.use("/api/schedules", router);
}