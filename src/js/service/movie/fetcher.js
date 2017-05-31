"use strict"

import Movie from './model'
import HttpClient from '../http-client'

class MovieFetcher {
    url = 'https://www.rottentomatoes.com/api/private/v2.0/search';

    fetchMovies(query) {
        var url = this.url + '?limit=10&q=' + query;

        return new Promise(function(resolve, reject) {
            HttpClient
                .getJSON(url)
                .then((apiData) => {
                    var movies = [];

                    for (var i = 0; i < apiData.movies.length; i++) {
                        movies.push(new Movie(
                            Movie.TYPE_MOVIE,
                            apiData.movies[i].name,
                            apiData.movies[i].image,
                            apiData.movies[i].meterScore,
                            null
                        ));
                    }

                    for (var i = 0; i < apiData.tvSeries.length; i++) {
                        movies.push(new Movie(
                            Movie.TYPE_TV_SHOW,
                            apiData.tvSeries[i].title,
                            apiData.tvSeries[i].image,
                            apiData.tvSeries[i].meterScore,
                            null
                        ));
                    }

                    resolve(movies);
                }).catch((err) => {
                    reject();
                });
        })
    }
}

export default new MovieFetcher();
