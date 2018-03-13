const express = require('express');
const router = express.Router();

const axios = require('axios');

const apiKey = process.env.GIPHY_API_KEY;
console.log(apiKey);

router.get('/random', (request, response) => {
    let url = `https://api.giphy.com/v1/gifs/random?&api_key=${apiKey}`

    axios.get(url)
        .then( res => {
            response.send(res.data)
        })
        .catch( error => {
            console.log('Error on giphy request', error);
        })
})

router.get('/:searchGif', (request, response) => {
    let searchGif = request.params.searchGif;
    let url = `https://api.giphy.com/v1/gifs/search?q=${searchGif}&api_key=${apiKey}`

    axios.get(url)
        .then( res => {
            response.send(res.data)
        })
        .catch( error => {
            console.log('Error on giphy request', error);
        })
})

module.exports = router; 