const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config();
const router = express.Router();
const axios = require('axios');

router.get('/:id',(req,res)=>{
    const apiKey = process.env.API_KEY
    console.log("req.params.search: ",req.params.id);
    axios({
      method: `GET`,
      url: `https://api.giphy.com/v1/gifs/search?&limit=10&api_key=${apiKey}&q=${req.params.id}`
    })
  
    .then ((response)=>{
      res.send(response.data);
    })
    .catch((error)=>{
      console.log("Error in get SEARCH", error);
    })
  
  })

  module.exports = router;
