const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(cors());

const movies = require('./data.js');
const cors = require('cors');

app.get('/movies', (req, res) => {
    const { search = " " } = req.query;

    let results = movies
    .filter(movie =>
        movie
            .film_title
            .toLowerCase()
            .includes(search.toLowerCase()));
            
    if (req.query.genre) {
        response = response
            .filter(movie =>
                movie
                    .country
                    .toLowerCase())
    }

    res
        .json(results);
    
});

app.listen(8000, () => {
    console.log('Express server is listening on port 8000');
});