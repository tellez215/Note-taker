const routes = require('express').Router();
const fs = require('fs')

// GET method to request data from the saved notes
routes.get('/notes', (req, res) => {
    const db = fs.readFileSync('db/db.json')
    const pareDb = JSON.parse(db)
    res.json(pareDb)
})


// POST method to send the data to db.json and display within the empty array using 'newNote' as a template
routes.post('/notes', (req, res) => {
    const db = fs.readFileSync('db/db.json')
    const pareDb = JSON.parse(db)
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        // id: uuidv4()
    }

    // since its an array , I used the PUSH method to push newNote into the db.json file
    pareDb.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(pareDb))
    res.json(pareDb);
})


module.exports = routes;