const express = require('express');
const client = require('../models/index.js');
const router = express.Router();
const addPage = require('../views/')
router.get("/", (req, res, next) => {
    try {
        res.send("we're in the get statement");
    } catch (error) {
        next(error)
    }
})

router.post ("/", (req, res, next) => {
    try {
        res.send("we're in the post statement");
    } 
    catch (error) {
        next(error);
    }
})

router.get("/add",  (req, res, next) => {
    try {
        console.log(addPage());
        res.send(addPage());
    } catch (error) {
        next(error);
    }
})

module.exports = router;