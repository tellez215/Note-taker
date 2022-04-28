const routes = require('express').Router();
const path = require('path')

// route for the notes.html file
routes.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))


});

// route for the index.html file if the first route doesn't work and or if user inputs an invalid path
routes.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))


});


module.exports = routes;