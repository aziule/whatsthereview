const MOVIE = 'MOVIE'
const TV_SHOW = 'TV_SHOW'

class Show {
    // you could set group the optional parameters and make it explicit
    // that they are optional.
    // something like
    constructor(type, name, {pictureUrl = '', score = null, matchingScore = null}) {
        this.type = type;
        this.name = name;
        this.pictureUrl = pictureUrl;
        this.score = score;
        this.matchingScore = matchingScore;
    }

    // I also prefer exposing method rather than constants
    // so I would go for:
    static movie(name, params) {
      return new Show(MOVIE, 'Team America', {
        pictureUrl: 'pic',
        score: 50
      });
    }

    // And another one for the tv:
  static tv(name, params) {
      return new Show(TV, 'Team America', {
        pictureUrl: 'pic',
        score: 50
      });
  }
}

export default Movie;
