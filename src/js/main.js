// Init services
var apiDataTransformer = new ApiDataTransformer();
var apiClient = new ApiClient(apiDataTransformer);
var doubleMetaphone = new DoubleMetaphone();
var evaluator = new Evaluator(doubleMetaphone);
var fetcher = new ScoreFetcher(apiClient, evaluator);
var speechListener = new SpeechListener();
var appRenderer = new AppRenderer(
    new ErrorRenderer(),
    new MoviesRenderer(),
    new RecorderRenderer(),
    new SearchRenderer()
);

// Listen events
var recordBtn = document.getElementsByClassName('recorder__record-btn')[0];

recordBtn.onclick = function() {
    appRenderer.startRecording();

    speechListener
        .listen()
        .then(function(transcript) {
            appRenderer.stopRecording(transcript);
            // fetch the movies and render them here
        })
        .catch(function(error) {
             // render error here
            appRenderer.stopRecording();
        });
};


// movieScoreFetcher.getMovieScore('snatch');    