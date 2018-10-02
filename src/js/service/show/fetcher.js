"use strict"

import Show from './show'
import HttpClient from '../http-client'

const URL_BASE = 'https://www.rottentomatoes.com/api/private/v2.0/search';

const showFetcher = {
    fetchShows: (query) => {
        var url = URL_BASE + '?limit=10&q=' + query;

        return new Promise(function(resolve, reject) {
            HttpClient
                .getJSON(url)
                .then((jsonData) => {
                    var shows = [];

                    for (var i = 0; i < jsonData.movies.length; i++) {
                        shows.push(Show.movie(
                            jsonData.movies[i].name,
                            jsonData.movies[i].image,
                            {
                                score: typeof jsonData.movies[i].meterScore === 'undefined' ? null : jsonData.movies[i].meterScore
                            }
                        ));
                    }

                    for (var i = 0; i < jsonData.tvSeries.length; i++) {
                        shows.push(Show.tvShow(
                            jsonData.tvSeries[i].title,
                            jsonData.tvSeries[i].image,
                            {
                                score: typeof jsonData.tvSeries[i].meterScore === 'undefined' ? null : jsonData.tvSeries[i].meterScore
                            }
                        ));
                    }

                    resolve(shows);
                }).catch((err) => {
                    reject(
                        err.httpStatusText
                            ? err.httpStatusText
                            : 'Something went wrong'
                    );
                });
        })
    }
}

export default showFetcher;
