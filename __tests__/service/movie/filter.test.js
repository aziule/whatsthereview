"use strict"

import Movie from '../../../src/js/service/movie/model'
import Filter from '../../../src/js/service/movie/filter'

it('sorts movies', () => {
    const m1 = new Movie(Movie.TYPE_MOVIE, 'Silent Hill', 'pic', 50, 100);
    const m2 = new Movie(Movie.TYPE_MOVIE, 'Hitch', 'pic', undefined, 100);
    const m3 = new Movie(Movie.TYPE_TV_SHOW, 'World War Z', 'pic', undefined, 90);
    const m4 = new Movie(Movie.TYPE_TV_SHOW, 'Welcome to Zombie Land', 'pic', undefined, 0);

    const movies = [m1, m2, m3, m4];

    expect(
        Filter.removeIrrelevantMovies(movies)
    ).toEqual([
        m1, m2
    ]);
});

