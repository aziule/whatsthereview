"use strict"

import Movie from './model'

function MovieFetcher() {
    this.url = 'https://www.rottentomatoes.com/api/private/v2.0/search';
}

MovieFetcher.prototype.fetchMovies = function(query) {
    var self = this;

    // @todo: add caching using local storage

    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        var url = self.url + '?limit=10&q=' + query;

        xhr.open('GET', url);

        xhr.onload = function() {
            if (this.status === 200) {
                var apiData = JSON.parse(this.responseText);
                var movies = [];

                for (var i = 0; i < apiData.movies.length; i++) {
                    movies.push(new Movie(
                        Movie.TYPE_MOVIE,
                        apiData.movies[i].name,
                        apiData.movies[i].image,
                        apiData.movies[i].meterScore
                    ));
                }

                for (var i = 0; i < apiData.tvSeries.length; i++) {
                    movies.push(new Movie(
                        Movie.TYPE_TV_SHOW,
                        apiData.tvSeries[i].title,
                        apiData.tvSeries[i].image,
                        apiData.tvSeries[i].meterScore
                    ));
                }

                resolve(movies);
                return;
            }

            reject({
                httpStatus: this.status,
                httpStatusText: this.statusText
            });
        };

        xhr.onerror = function() {
            reject({
                httpStatus: this.status,
                httpStatusText: this.statusText
            });
        };

        xhr.send();
    });
};

export default new MovieFetcher();
