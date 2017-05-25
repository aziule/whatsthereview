function MovieMatcher(doubleMetaphone) {
    this.doubleMetaphone = doubleMetaphone;
};

// Get the double metaphone value of both the asked movie and the list of movies
// and updates the movies' matching percentage.
MovieMatcher.prototype.updateMatchingScore = function(needle, movies) {
    var matching = [];

    for (var i = 0; i < movies.length; i++) {
        movies[i].matchingScore = this.getDoubleMetaphoneMatchingPct(needle, movies[i].name);
        matching.push(movies[i]);
    }

    return matching;
};

MovieMatcher.prototype.getDoubleMetaphoneMatchingPct = function(a, b) {
    dmA = this.doubleMetaphone.doubleMetaphone(a);
    dmB = this.doubleMetaphone.doubleMetaphone(b);

    if (dmA.primary === dmB.primary) {
        return 100;
    }

    if (dmA.primary === dmB.secondary || dmA.secondary === dmB.primary) {
        return 60;
    }

    if (dmA.secondary === dmB.secondary) {
        return 30;
    }

    return 0;
}
