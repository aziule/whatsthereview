"use strict"

import Movie from '../../../src/js/service/movie/model'
import Evaluator from '../../../src/js/service/movie/evaluator'

test('evaluates movies\' matching score', () => {
    const m1 = new Movie(Movie.TYPE_MOVIE, 'Ali G', 'pic', 50);
    const m2 = new Movie(Movie.TYPE_MOVIE, 'Team America', 'pic', 50);
    const m3 = new Movie(Movie.TYPE_MOVIE, 'The Interview', 'pic', 50);

    const movies = [m1, m2, m3];

    const evaluatedMovies = Evaluator.evaluateMatchingScore('The Interview', movies);
    expect(evaluatedMovies[0].matchingScore).toBe(30);
    expect(evaluatedMovies[1].matchingScore).toBe(30);
    expect(evaluatedMovies[2].matchingScore).toBe(100);
});

