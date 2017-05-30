"use strict"

var Filter = {
    removeIrrelevantMovies(movies) {
        return movies.filter((movie) => {
            if (movie.score !== undefined) {
                return true;
            }

            return movie.matchingScore === 100;
        })
    }
};

export default Filter;
