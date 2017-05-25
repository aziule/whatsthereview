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
            processMovies(name, movies);
        })
        .catch(function(errData) {
            console.error(errData);
        });
}

var processMovies = function(query, movies) {
    var evaluatedMovies = this.evaluator.updateMatchingScore(query, movies);

    // Order by matching score or alphabetically
    return evaluatedMovies.sort(function(a, b) {
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
};
