const express = require('express');
const router = express.Router();

// Pie Schema
const {Pie, FavePie} = require('../models/model.js');

// Seed Data
const Pies = require('../models/PaleoPie.js')

// Index
router.get('/', (req, res) => {
    Pie.find({}, (error, allPies) => {
        res.render('Index', {
            pies: allPies
        });
    });
});

// About
router.get('/about', (req, res) => {
    res.render('About');
});

// New
router.get('/new', (req, res) => {
    res.render('New');
});

// Crust Choices
const crust = [
    'cassava flour', 
    'almond flour',
    'coconut flour',
    'tigernut flour'
];

// Filling Choices
const filling = [
    'blueberries',
    'strawberries',
    'mixed berry',
    'pumpkin',
    'chocolate cream',
    'banana cream',
    'lemon'
]

// Create
router.post('/fanfaves', (req, res) => {
    req.body.ingredients = {crust: [], filling: []}
    for (let key in req.body) {
        if (crust.indexOf(key) > -1 && req.body[key] === 'on') {
            req.body.ingredients.crust.push(key);
            delete req.body[key];
        } 
        if (filling.indexOf(key) > -1 && req.body[key] === 'on') {
            req.body.ingredients.filling.push(key);
            delete req.body[key];
        } 
    }
    FavePie.create(req.body, (error, newPie) => {
        res.redirect('/PaleoPie/fanfaves');
    });
});

// Fan Fave Page
router.get('/fanfaves', (req, res) => {
    FavePie.find({}, (error, allPies) => {
        res.render('FanFaves', {
            pies: allPies
        });
    });
})

// Pie Seeds
// Pie.create(Pies, (error, allpies) => {
//     // error ? console.log(error) : console.log('Added Data');
// });

// Show
router.get('/:id', (req, res) => {
    Pie.findById(req.params.id, (error, singlePie) => {
        res.render('Show', {
            pie: singlePie
        });
    });
});

// Edit
router.get('/:id/edit', (req, res) => {
    Pie.findById(req.params.id, (error, singlePie) => {
        res.render('Edit', {
            pie: singlePie
        });
    });
});

// Update
router.put('/fanfaves', (req, res) => {
    req.body.ingredients = {crust: [], filling: []}
    for (let key in req.body) {
        if (crust.indexOf(key) > -1 && req.body[key] === 'on') {
            req.body.ingredients.crust.push(key);
            delete req.body[key];
        } 
        if (filling.indexOf(key) > -1 && req.body[key] === 'on') {
            req.body.ingredients.filling.push(key);
            delete req.body[key];
        } 
    }
    Pie.findByIdAndUpdate(req.params.id, req.body, (error, updatedPie) => {
        res.redirect('/PaleoPie/fanfaves');
    });
});

// Destroy
router.delete('/fanfaves/:id', (req, res) => {
    FavePie.findByIdAndDelete(req.params.id, (error, pie) => {
        res.redirect('/PaleoPie/fanfaves');
    });
});

module.exports = router;