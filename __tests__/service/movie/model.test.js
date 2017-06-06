"use strict"

import Movie from '../../../src/js/service/movie/model'

it('creates movie models', () => {
    const type = Movie.TYPE_MOVIE;
    const name = 'Avatar';
    const pictureUrl = 'http://some-image-repo.com/image.png';
    const score = 50;
    const matchingScore = 100;

    const movie = new Movie(type, name, pictureUrl, score, matchingScore);

    expect(movie.type).toBe(type);
    expect(movie.name).toBe(name);
    expect(movie.pictureUrl).toBe(pictureUrl);
    expect(movie.score).toBe(score);
    expect(movie.matchingScore).toBe(matchingScore);
});

