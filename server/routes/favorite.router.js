const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "favorites"`
  pool.query(queryText)
    .then((result) => { res.send(result.rows)})
    .catch((error) => { console.log('Error up in the GET for favorites', error)})
});

// add a new favorite
router.post('/', (req, res) => {
  console.log("req.body is this", req.body.info)
  const queryValues = [req.body.info];
  const queryText = `
    INSERT INTO "favorites" 
    ("gif_url")
    VALUES
    ($1);`
  pool.query(queryText, queryValues)
    .then((result) => { res.sendStatus(201) })
    .catch((err) => {
      console.log('Error in POST /api/favorites', err)
      res.sendStatus(500)
    })
});

// update a favorite's associated category
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image

  res.sendStatus(200);
});

// delete a favorite
router.delete('/:id', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
