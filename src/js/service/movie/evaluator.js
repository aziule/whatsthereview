"use strict"

import DoubleMetaphone from 'doublemetaphone'

var doubleMetaphone = new DoubleMetaphone();

var getDoubleMetaphoneMatchingPct = (a, b) => {
    var dmA = doubleMetaphone.doubleMetaphone(a);
    var dmB = doubleMetaphone.doubleMetaphone(b);

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

const evaluator = {
    evaluateMatchingScore: (needle, movies) => {
        for (var i = 0; i < movies.length; i++) {
            movies[i].matchingScore = getDoubleMetaphoneMatchingPct(needle, movies[i].name);
        }

        return movies;
    }
};

export default evaluator;
