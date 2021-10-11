'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/about', function (req, res) {
    res.render('about', { title: 'About Page' });
});

router.get('/project', function (req, res) {
    res.render('project', { title: 'Project Page' });
});

router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact Page' });
});

router.get('/service', function (req, res) {
    res.render('service', { title: 'Service Page' });
});

module.exports = router;
