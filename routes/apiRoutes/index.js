const routes = require('express').Router();
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

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
            id: uuidv4()
        }
        // since its an array , I used the PUSH method to push newNote into the db.json file
    pareDb.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(pareDb))
    res.json(pareDb);
})


routes.delete('/notes/:id', (req, res) => {
    const db = fs.readFileSync('db/db.json')
    const pareDb = JSON.parse(db)
        //  const tempArray = []
        // for (let i = 0; i < pareDb.length; i++) {
        //     const note = pareDb[i];
        //     if (note.id !== req.params.id) {
        //         tempArray.push(note)
        //     }
        // }

    const filterNotes = pareDb.filter(note => note.id !== req.params.id)
    fs.writeFileSync('db/db.json', JSON.stringify(filterNotes))
    res.json(filterNotes)

})

module.exports = routes;