"use strict"

const filter = {
    removeIrrelevantShows(shows) {
        return shows.filter((show) => {
            if (show.score) {
                return true;
            }

            return show.matchingScore === 100;
        })
    }
};

export default filter;
