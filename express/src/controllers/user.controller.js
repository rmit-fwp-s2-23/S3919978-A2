const db = require("../database")
const argon2 = require("argon2");

// Create a user in the database.
exports.create = async (req, res) => {
    var errors = {};

    // validate firstname
    if(!req.body.firstname){
        errors.firstname = "Empty first name!"
    }

    // validate lastname
    if(!req.body.lastname){
        errors.lastname = "Empty last name!"
    }

    // Check if email is taken
    const user = await db.user.findByPk(req.body.email);
    if(user !== null){
        errors.email = "This email is taken!"
    }

    // validate password
    if(!req.body.password){
        errors.password = "Empty password!"
    }

    // validate confirm password
    if(!req.body.confirm_password){
        errors.confirm_password = "Empty confirm password!"
    }else if(req.body.confirm_password !== req.body.password){
        errors.confirm_password = "Confirm password does not match!"
    }


    // Return all errors
    if(Object.keys(errors).length !== 0){
        return res.json({errors: errors})
    }


    // Create new a user
    const hash = await argon2.hash(req.body.password, {type: argon2.argon2id});
    await db.user.create({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        email: req.body.email,
        password: hash
    })

    res.json({
        message: "Register successfully!"
    })
}

exports.update = async (req, res) => {
    var errors = {};

    // validate firstname
    if(!req.body.firstname){
        errors.firstname = "Empty first name!"
    }

    // validate lastname
    if(!req.body.lastname){
        errors.lastname = "Empty last name!"
    }

    const user = await db.user.findByPk(req.body.email);

    if(user === null){
        errors.email = "This account is not exist!"
    }

    // Return all errors
    if(Object.keys(errors).length !== 0){
        return res.json({errors: errors})
    }

    user.update({first_name: req.body.firstname, last_name: req.body.lastname},{where: {email: req.body.email}})
    
    res.json({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        createdAt: user.createdAt
    })
}

exports.login = async (req, res) => {
    var errors = {};

    // Check if email is taken
    const user = await db.user.findByPk(req.body.email);
    if(user === null){
        errors.email = "This account is not exist!"
    }else{
        if(await argon2.verify(user.password, req.body.password) === false){
            errors.password = "Password is not correct!"
        }
    }

    if(Object.keys(errors).length !== 0){
        return res.json({errors: errors})
    }

    res.json({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        createdAt: user.createdAt
    })
}