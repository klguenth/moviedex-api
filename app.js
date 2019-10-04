const express = require('express');
const morgan = require('morgan');
const movies = require('./data.json');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.get('/movies', (req, res) => {
    const { country, genre, rating } = req.query;

    if (country) {
        let results = movies.filter(movie =>
            movie
                .country
                .toLowerCase()
                .includes(country.toLowerCase()));
    } else if (genre) {
        let results = movies.filter(movie =>
            movie
                .genre
                .toLowerCase()
                .includes(genre.toLowerCase()));
    } else if (rating) {
        let results = movies.filter(movie =>
            movie.avg_vote >= rating);
    } else {
        results = movies;
    }
    console.log("results = ", results);
    res.status(200).json(results);
});

app.get('*', (req, res) => {
    res.status(404).json({message: "Not found"})
});

const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});