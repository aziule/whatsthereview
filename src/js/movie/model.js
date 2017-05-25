const TYPE_MOVIE = 'movie';
const TYPE_TV_SHOW = 'tv_show';

function Movie(type, name, year, pictureUrl, score) {
    this.type = type;
    this.name = name;
    this.year = year;
    this.pictureUrl = pictureUrl;
    this.score = score;
    this.matchingScore = 0;
}
