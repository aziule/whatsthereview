// Init services
var apiDataTransformer = new ApiDataTransformer();
var apiClient = new ApiClient(apiDataTransformer);
var doubleMetaphone = new DoubleMetaphone();
var evaluator = new Evaluator(doubleMetaphone);
var fetcher = new ScoreFetcher(apiClient, evaluator);
var speechListener = new SpeechListener();
var errorRenderer = new ErrorRenderer();
var moviesRenderer = new MoviesRenderer();
var recorderRenderer = new RecorderRenderer();
var renderer = new AppRenderer(
    errorRenderer,
    moviesRenderer,
    recorderRenderer
);

// Listen events
var recordBtn = document.getElementsByClassName('recorder__record-btn')[0];

recordBtn.onclick = function() {
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