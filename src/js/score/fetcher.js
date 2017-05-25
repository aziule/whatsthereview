function ScoreFetcher(apiClient, evaluator) {
    if (typeof apiClient.queryApi !== 'function') {
        throw 'apiClient must implement the queryApi method';
    }

    if (typeof evaluator.evaluateMatchingScore !== 'function') {
        throw 'evaluator must implement the evaluateMatchingScore method';
    }

    this.apiClient = apiClient;
    this.evaluator = evaluator;
};

ScoreFetcher.prototype.getMovieScore = function(name) {
    var self = this;

    this.apiClient.queryApi(name)
        .then(function(movies) {
            console.log(processMovies(name, movies).bind(self));
            return processMovies(name, movies).bind(self);
        })
        .catch(function(errData) {
            // render error
        });
}

var processMovies = function(query, movies) {
    var evaluatedMovies = this.evaluator.updateMatchingScore(query, movies);

    // Order by matching score or alphabetically
    evaluatedMovies = evaluatedMovies.sort(function(a, b) {
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

    return evaluatedMovies;
};