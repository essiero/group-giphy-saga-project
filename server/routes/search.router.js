const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config();
const router = express.Router();
const axios = require('axios');

router.get('/',(req,res)=>{
    const apiKey = process.env.API_KEY
    axios({
      method: `GET`,
      url: `https://api.giphy.com/v1/gifs/search?q=cats&limit=10&api_key=${apiKey}`
    })
  
    .then ((response)=>{
      res.send(response.data);
    })
    .catch((error)=>{
      console.log("Error in get SEARCH", error);
    })
  
  })

  module.exports = router;
