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
    addMatchingScore: (needle, shows) => {
        for (var i = 0; i < shows.length; i++) {
            shows[i].matchingScore = getDoubleMetaphoneMatchingPct(needle, shows[i].name);
        }

        return shows;
    }
};

export default evaluator;
