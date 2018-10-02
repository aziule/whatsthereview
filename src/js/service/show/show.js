"use strict"

const TYPE_MOVIE = 'MOVIE';
const TYPE_TV_SHOW = 'TV_SHOW';

class Show {
    constructor(type, name, pictureUrl, { score = null, matchingScore = null }) {
        this.type = type;
        this.name = name;
        this.pictureUrl = pictureUrl;
        this.score = score;
        this.matchingScore = matchingScore;
    }
}

Show.movie = (name, pictureUrl, { score = null, matchingScore = null }) => {
    return new Show(
        TYPE_MOVIE,
        name,
        pictureUrl,
        { score, matchingScore }
    )
}

Show.tvShow = (name, pictureUrl, { score = null, matchingScore = null }) => {
    return new Show(
        TYPE_TV_SHOW,
        name,
        pictureUrl,
        { score, matchingScore }
    )
}

export default Show;
