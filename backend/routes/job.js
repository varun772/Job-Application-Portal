var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");
//const keys = require("../../config/keys");

// Load  model
const job = require("../models/jobdetails");

router.get("/", function(req, res) {
    job.find(function(err, job) {
		if (err) {
			console.log(err);
		} else {
			res.json(job);
		}
	})
});
/*router.get("/", function (req, res) {​​​​​
job.find({​​​​​}​​​​​).sort({​​​​​ salary: -1 }​​​​​)
.then(
function (jobs, err) {​​​​​
if (jobs)
res.status(200).json(jobs);
else res.status(400).json(err);
}​​​​​
)
}​​​​​);*/

/*router.post("/", function (req, res) { filters(req, res) })

async function filters(req, res) {
      console.log(req.body);
        var jobs = await job.find({}).sort({ salary: -1 })
        if (jobs) {
            ans = jobs;
            console.log("from sort===1")
        }
    res.status(200).json(jobs);
}*/

/*router.get("/", function (req,res){jobs(req,res)});

 async function jobs(req, res)
 {
 var title=" ";
 var jobs = await job.find({ $and: [{ title: { $regex: title }, }] }).sort({ salary: -1 })
 res.status(200).json(jobs);
};*/

router.post("/profileone", (req, res) => {
    const newUser = new job({
        title: req.body.title,
        type: req.body.type,
        duration: req.body.duration,
        salary:req.body.salary,
        rating:req.body.rating,
        maxapplication:req.body.maxapplication,
        maxposition:req.body.maxposition,
        skills:req.body.skills,
        date: req.body.date
    });

    newUser.save()
        .then(job => {
            res.status(200).json(job);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

module.exports = router;
