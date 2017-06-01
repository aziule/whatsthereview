"use strict"

import fs from 'fs'
import Fetcher from '../../../src/js/service/movie/fetcher'
import HttpClient from '../../../src/js/service/http-client'
import Movie from '../../../src/js/service/movie/model'

test('fetches movies after calling the API', () => {
    HttpClient.getJSON = jest.fn().mockImplementation(url => {
        return Promise.resolve(JSON.parse(fs.readFileSync('./tests/__mockData__/search-snatch.json')));
    });

    Fetcher.fetchMovies("query").then((movies) => {
        expect(movies).toEqual([
            new Movie(Movie.TYPE_MOVIE, 'Invasion of the Body Snatchers', 'pic_url1', 94, null),
            new Movie(Movie.TYPE_MOVIE, 'The Candy Snatchers', 'pic_url2', 83, null),
            new Movie(Movie.TYPE_MOVIE, 'Body Snatchers', 'pic_url3', 71, null),
            new Movie(Movie.TYPE_MOVIE, 'The Bone Snatcher', 'pic_url4', 0, null),
            new Movie(Movie.TYPE_MOVIE, 'Snatch', 'pic_url5', 73, null),
            new Movie(Movie.TYPE_MOVIE, 'Invasion of the Body Snatchers', 'pic_url6', 98, null),
            new Movie(Movie.TYPE_MOVIE, 'The Body Snatcher', 'pic_url7', 81, null),
            new Movie(Movie.TYPE_MOVIE, 'Snatched', 'pic_url8', null, null),
            new Movie(Movie.TYPE_MOVIE, 'Snatched!: Curse of the Pink Panties 2', 'pic_url9', null, null),
            new Movie(Movie.TYPE_MOVIE, 'Snatched', 'pic_url10', 36, null),
            new Movie(Movie.TYPE_TV_SHOW, 'Snatch', 'pic_url11', 33, null),
            new Movie(Movie.TYPE_TV_SHOW, 'Snatchers', 'pic_url12', undefined, null),
        ]);
    });
});

test('handles http errors', () => {
    HttpClient.getJSON = jest.fn().mockImplementation(url => {
        return Promise.reject({
            httpStatus: 500,
            httpStatusText: 'The error message'
        });
    });

    Fetcher.fetchMovies("query").catch((err) => {
        expect(err).toBe('The error message');
    });
});
