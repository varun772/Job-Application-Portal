var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");
//const keys = require("../../config/keys");

// Load User model
const User = require("../models/Users");

// GET request
// Getting all the users
router.get("/", function(req, res) {
    User.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});
// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request
// Add a user to db
router.post("/register", (req, res) => {
    //const name = req.body.name;
    User.findOne({ name: req.body.name}).then(user => {
        if (user) {
            return res.status(400).json({ error: "name already exists" });
            //console.log("name already exists pick another one");
        } else {
            const NewUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                usertype: req.body.usertype,
                date:req.body.date,
            });

            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(NewUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    NewUser.password = hash;
                    NewUser.save()
                        .then(user => {
                            res.status(200).json(user);
                        })
                        .catch(err => {
                            res.status(400).send(err);
                        });
                });
            });
        }
    });
});

// POST request
// Login
router.post("/login", (req, res) => {
  const password = req.body.password;
	// Find user by name

	User.findOne({ name: req.body.name }).then(user => {
		// Check if user name exists
		if (!user) {
			return res.json({status:"0"});
    }
    else{
      bcrypt.compare(password, user.password).then(isMatch => {
         if (!isMatch) {
          return res.json({status:"2"});
        }
        else {
          let status = {
            type:""
          };
          status.type= user.usertype;
          return res.json(status);
        }
      });
    }
	});
});


module.exports = router;
