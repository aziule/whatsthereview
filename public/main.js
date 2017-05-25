// Init services
var apiDataTransformer = new ApiDataTransformer();
var apiClient = new ApiClient(apiDataTransformer);
var doubleMetaphone = new DoubleMetaphone();
var evaluator = new Evaluator(doubleMetaphone);
var fetcher = new ScoreFetcher(apiClient, evaluator);
var speechListener = new SpeechListener();

// Listen events
var btnListen = document.getElementById('listen');

btnListen.onclick = function() {
    speechListener
        .listen()
        .then(function(transcript) {
            console.log(transcript);
            // fetch the movies and render them here
        })
        .catch(function(error) {
            console.error(error); // render error here
        })
        .then(function() {
            // change app state here
        });
};


// movieScoreFetcher.getMovieScore('snatch');    