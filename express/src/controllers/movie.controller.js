const db = require("../database");

// Select all movies from the database.
exports.all = async (req, res) => {
    var movies = await db.movie.findAll({where: {released: req.body.released}});

    res.json(movies);
};

exports.getByFriendlyUrl = async (req, res) => {
    var movie = await db.movie.findOne({where: {friendly_url: req.params.friendlyUrl}});

    res.json(movie);
}