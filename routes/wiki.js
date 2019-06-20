const express = require('express');
const client = require('../models/index.js');
const router = express.Router();
const { addPage } = require('../views');
const { Page } = require("../models");
const { wikiPage } = require('../views');
const { main } = require ('../views')

router.get("/add",  (req, res, next) => {
    try {
        res.send(addPage());
    } catch (error) {
        next(error);
    }
});

router.get("/", async (req, res, next) => {
    try {
        const pages = await Page.findAll();
        res.send(main(pages));
    }
    catch (error) {
        next(error);
    }
    
});

router.get("/:slug", async (req, res, next) => {
    try {
        const page = await Page.findOne({
            where: {
                slug: req.params.slug
            }
        });
        res.send(wikiPage(page));
    } catch (error) {
        next (error)
    }
});

router.post ("/", async (req, res, next) => {
    const page = new Page({
        title: req.body.title,
        content: req.body.content
      });
    try {
        await page.save();
        console.log(page);
        res.redirect('/');

    }
    catch (error) {
        next(error);
    }
});

module.exports = router;

