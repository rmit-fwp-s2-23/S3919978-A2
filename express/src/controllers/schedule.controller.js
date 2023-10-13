const db = require("../database");

// Get showing dates by movie Id
exports.getDatesByMovieId = async (req, res) => {
    const schedules = await db.schedule.findAll({
        attributes: ['date'],
        where: {
            movieId: req.body.movieId,
        },
        group: 'date'
    });

    res.json(schedules);
};


// Get times by date, movie id and cinema id
exports.getTimesByDateAndMovieId = async (req, res) =>{
    const times = await db.schedule.findAll({
        where: {
            movieId: req.body.movieId,
            date: req.body.date,
        },
    })

    res.json(times);
}