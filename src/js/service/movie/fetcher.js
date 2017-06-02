"use strict"

import Movie from './model'
import HttpClient from '../http-client'

const URL_BASE = 'https://www.rottentomatoes.com/api/private/v2.0/search';

const movieFetcher = {
    fetchMovies: (query) => {
        var url = URL_BASE + '?limit=10&q=' + query;

        return new Promise(function(resolve, reject) {
            HttpClient
                .getJSON(url)
                .then((jsonData) => {
                    var movies = [];

                    for (var i = 0; i < jsonData.movies.length; i++) {
                        movies.push(new Movie(
                            Movie.TYPE_MOVIE,
                            jsonData.movies[i].name,
                            jsonData.movies[i].image,
                            typeof jsonData.movies[i].meterScore === 'undefined' ? null : jsonData.movies[i].meterScore,
                            null
                        ));
                    }

                    for (var i = 0; i < jsonData.tvSeries.length; i++) {
                        movies.push(new Movie(
                            Movie.TYPE_TV_SHOW,
                            jsonData.tvSeries[i].title,
                            jsonData.tvSeries[i].image,
                            typeof jsonData.movies[i].meterScore === 'undefined' ? null : jsonData.tvSeries[i].meterScore,
                            null
                        ));
                    }

                    resolve(movies);
                }).catch((err) => {
                    reject(err.httpStatusText);
                });
        })
    }
}

export default movieFetcher;
