"use strict"

class Movie {
    constructor(type, name, year, pictureUrl, score) {
        this.type = type;
        this.name = name;
        this.year = year;
        this.pictureUrl = pictureUrl;
        this.score = score;
        this.matchingScore = null;
    }
}

Movie.TYPE_MOVIE = 'MOVIE';
Movie.TYPE_TV_SHOW = 'TV_SHOW';

export default Movie;
