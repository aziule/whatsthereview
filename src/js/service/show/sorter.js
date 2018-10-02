"use strict"

const sorter = {
    sortShows: (shows) => {
        // Sort shows by matching score or alphabetically
        return shows.sort(function(a, b) {
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
    }
};

export default sorter;
