"use strict"

import Movie from '../../../src/js/service/movie/model'
import Sorter from '../../../src/js/service/movie/sorter'

test('sorts movies', () => {
    const m1 = new Movie(Movie.TYPE_MOVIE, 'Fight Club', 'pic', 50, 50);
    const m2 = new Movie(Movie.TYPE_MOVIE, 'Snatch', 'pic', 50, 100);
    const m3 = new Movie(Movie.TYPE_TV_SHOW, 'Snatch', 'pic', 50, 100);
    const m4 = new Movie(Movie.TYPE_MOVIE, 'Django', 'pic', 50, 100);
    const m5 = new Movie(Movie.TYPE_MOVIE, 'Avatar', 'pic', 50, 50);
    const m6 = new Movie(Movie.TYPE_MOVIE, 'Flight', 'pic', 50, 0);

    const movies = [m1, m2, m3, m4, m5, m6];

    expect(
        Sorter.sortMovies(movies)
    ).toEqual([
        m4, m2, m3, m5, m1, m6
    ]);
});

