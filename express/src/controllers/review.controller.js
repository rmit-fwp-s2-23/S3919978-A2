const db = require("../database")
const argon2 = require("argon2");

// Get all reviews by movie id
exports.getAllByMovieId = async (req, res) => {
    const reviews = await db.review.findAll({
        include: [
          {
            model: db.user,
            attributes: ['first_name', 'last_name'],
          },
        ],
        where: { movieId: req.body.movieId },
      });

    res.json(reviews)
}

exports.create = async (req, res) => {

    if(!req.body.content){
        return res.json({"error": "Empty review!"})
    }

    if(req.body.content.length > 600){
        return res.json({"error": "Your review need to be less than 600 characters!"})
    }

    const review = await db.review.create({
        content: req.body.content,
        userEmail: req.body.userEmail,
        movieId: req.body.movieId
    })

    const result = await db.review.findAll({
        include: [
          {
            model: db.user,
            attributes: ['first_name', 'last_name'],
          },
        ],
        where: { id: review.id },
      });


    res.json(result)
}

