const db = require("../database");

// Select all movies from the database.
exports.all = async (req, res) => {
    const cinemas = await db.cinema.findAll();

    res.json(cinemas);
};

