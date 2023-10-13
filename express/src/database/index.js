const { Sequelize, DataTypes } = require("sequelize");
const config = require("./config.js");

const db = {
    Op: Sequelize.Op
};

// Create Sequelize.
db.sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.DIALECT
});

// Include models.
db.user = require("../models/user.js")(db.sequelize, DataTypes);
db.movie = require("../models/movie.js")(db.sequelize, DataTypes);
db.cinema = require("../models/cinema.js")(db.sequelize, DataTypes);
db.schedule = require("../models/schedule.js")(db.sequelize, DataTypes);
db.review = require("../models/review.js")(db.sequelize, DataTypes);
db.ticket = require("../models/ticket.js")(db.sequelize, DataTypes);

// db.movie.hasMany(db.schedule);
// db.cinema.hasMany(db.schedule);

db.schedule.belongsTo(db.movie);
db.schedule.belongsTo(db.cinema);

db.review.belongsTo(db.movie)
db.review.belongsTo(db.user)

db.user.hasMany(db.ticket)

db.ticket.belongsTo(db.schedule)


db.sync = async () => {
    await db.sequelize.sync({alter: true});

    await seedData();
}


async function seedData(){
    // Seed a user
    // const count = await db.user.count();

    // if(count > 0){
    //     return;
    // }

    // const argon2 = require('argon2');

    // let hash = await argon2.hash("abc123", {type: argon2.argon2i});
    
    // await db.user.create({
    //     first_name: "Tran",
    //     last_name: "Phan",
    //     email: "test@gmail.com",
    //     password: hash,
    // });

    // Seed movies
    // const movieCount = await db.movie.count();

    // if(movieCount > 0){
    //     return;
    // }

    // await db.movie.bulkCreate([
    //     {
    //         title: "Black Sea",
    //         length: "103 min",
    //         release_date: '31 Aug 2023',
    //         poster: 'https://images.unsplash.com/photo-1584281722160-4e3321029d8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2190&q=80',
    //         description: 'When veteran salvager Robinson loses his job, he assembles a team of English and Russian men and goes on a rogue mission to find a Nazi U-boat filled with gold that was sunk in the Black Sea.',
    //         released: true,
    //         friendly_url: 'black-sea'
    //     },
    //     {
    //         title: "Impossible",
    //         length: "90 min",
    //         release_date: '22 Sep 2022',
    //         poster: 'https://images.unsplash.com/photo-1625457672004-f752de081bd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    //         description: 'Maria, Henry and their three kids decide to spend Christmas in Thailand. But their luxurious holiday turns into a nightmare when a tsunami swells up unannounced, thereby separating the family.',
    //         released: true,
    //         friendly_url: 'impossible',
    //     },
    //     {
    //         title: "First Man",
    //         length: "120 min",
    //         release_date: '1 Jan 2023',
    //         poster: 'https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2636&q=80',
    //         description: 'An American NASA test pilot, and his fellow Apollo Program team-members zip themselves into insulated suits and set out on a mission to land on the moon.',
    //         released: true,
    //         friendly_url: 'first-man',
    //     },
    //     {
    //         title: "Money Heist",
    //         length: "168 min",
    //         release_date: '15 Apr 2022',
    //         poster: 'https://images.unsplash.com/photo-1593672715438-d88a70629abe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    //         description: 'A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history.',
    //         released: true,
    //         friendly_url: 'money-heist',
    //     },
    //     {
    //         title: "Rose",
    //         length: "168 min",
    //         release_date: '9 Jun 2023',
    //         poster: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2586&q=80',
    //         description: 'About two sisters, Inger and Ellen, and how their relationship is challenged on an anticipated bus trip to Paris.',
    //         released: true,
    //         friendly_url: 'rose',
    //     },
    //     {
    //         title: "The Earth Quake",
    //         length: "103 min",
    //         release_date: '31 Aug 2023',
    //         poster: 'https://images.unsplash.com/photo-1626695840539-a8821cdbcd9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2570&q=80',
    //         description: 'Numerous people struggle for survival in the aftermath of a high-intensity earthquake that has wreaked havoc in Los Angeles, California.',
    //         released: false,
    //         friendly_url: 'the-earth-quake'
    //     },
    //     {
    //         title: "Wall-E",
    //         length: "90 min",
    //         release_date: '22 Sep 2022',
    //         poster: 'https://images.unsplash.com/photo-1589254066007-898d52d910d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    //         description: 'A machine responsible for cleaning a waste-covered Earth meets another robot and falls in love with her. Together, they set out on a journey that will alter the fate of mankind.',
    //         released: false,
    //         friendly_url: 'wall-e',
    //     },
    //     {
    //         title: "Spider Man",
    //         length: "120 min",
    //         release_date: '1 Jan 2023',
    //         poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    //         description: "Peter Parker's life changes when he is bitten by a genetically altered spider and gains superpowers. He uses his powers to help people and finds himself facing the Green Goblin, an evil maniac.",
    //         released: false,
    //         friendly_url: 'spider-man',
    //     }
    // ]);


    // Seed cinemas
    // db.cinema.bulkCreate([
    //     {name: "Melbourne CBD"},
    //     {name: "Chadstone"}
    // ])

}

module.exports = db;