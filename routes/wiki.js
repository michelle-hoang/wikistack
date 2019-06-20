const express = require('express');
const client = require('../models/index.js');
const router = express.Router();
const { addPage } = require('../views');

router.get("/add",  (req, res, next) => {
    try {
        res.send(addPage());
    } catch (error) {
        next(error);
    }
});

router.get("/", (req, res, next) => {
    res.redirect('/wiki');
});

router.post ("/", (req, res, next) => {
    try {
        res.send("we're in the post statement");
    } 
    catch (error) {
        next(error);
    }
});

module.exports = router;