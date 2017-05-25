function ApiDataTransformer() {

}

ApiDataTransformer.prototype.apiDataToMoviesList = function(apiData) {
    var moviesList = [];

    for (var i = 0; i < apiData.movies.length; i++) {
        moviesList.push(new Movie(
            TYPE_MOVIE,
            apiData.movies[i].name,
            apiData.movies[i].year,
            apiData.movies[i].image,
            apiData.movies[i].meterScore
        ));
    }

    for (var i = 0; i < apiData.tvSeries.length; i++) {
        moviesList.push(new Movie(
            TYPE_TV_SHOW,
            apiData.tvSeries[i].title,
            apiData.tvSeries[i].year,
            apiData.tvSeries[i].image,
            apiData.tvSeries[i].meterScore
        ));
    }

    return moviesList;
}
