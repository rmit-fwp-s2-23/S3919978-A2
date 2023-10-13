const db = require("../database");

// Select all movies from the database.
exports.create = async (req, res) => {
    const schedule = await db.schedule.findByPk(req.body.scheduleId)
    const slots = schedule.slot

    if(slots == 0){
        return res.json({error: "Sold out!"})
    }

    if(slots - req.body.amount < 0){
        return res.json({error: "There is/are " + slots + " ticket(s) available!"})
    }

    await schedule.update({
        slot: slots - req.body.amount
    })

    const ticket = await db.ticket.create({
        amount: req.body.amount,
        userEmail: req.body.userEmail,
        scheduleId: req.body.scheduleId
    })

    res.json(ticket)
};


exports.getByUserEmail = async (req, res) => {
    const tickets = await db.ticket.findAll({
        include: [
          {
            model: db.schedule,
            attributes: ['date', 'time'],
            include: [
                {
                    model: db.movie,
                    attributes: ['title'],
                },
                {
                    model: db.cinema,
                    attributes: ['name'],
                },
            ]
          },
        ],
        where: { userEmail: req.body.userEmail },
      })

    res.json(tickets);
}

