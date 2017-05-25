function MovieScoreFetcher(apiClient, movieMatcher) {
    if (typeof apiClient.queryApi !== 'function') {
        throw 'apiClient must implement the queryApi method';
    }

    if (typeof movieMatcher.updateMatchingScore !== 'function') {
        throw 'movieMatcher must implement the matchMovieAgainstList method';
    }

    this.apiClient = apiClient;
    this.movieMatcher = movieMatcher;
};

MovieScoreFetcher.prototype.getMovieScore = function(name) {
    var self = this;

    this.apiClient.queryApi(name)
        .then(function(movies) {
            processMovies(name, movies);
        })
        .catch(function(errData) {
            console.error(errData);
        });
}

var processMovies = function(query, movies) {
    var matchedMovies = this.movieMatcher.updateMatchingScore(query, movies);

    // Order by matching score or alphabetically
    matchedMovies = matchedMovies.sort(function(a, b) {
        if (a.matchingScore === b.matchingScore) {
            if (a.name < b.name) {
                return -1;
            }

            if (a.name > b.name) {
                return 1;
            }

            return 0;
        }

        return b.matchingScore - a.matchingScore;
    });

    return matchedMovies;
};
