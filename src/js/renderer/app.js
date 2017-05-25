function AppRenderer(errorRenderer, moviesRenderer, recorderRenderer, searchRenderer) {
    this.errorRenderer = errorRenderer;
    this.moviesRenderer = moviesRenderer;
    this.recorderRenderer = recorderRenderer;
    this.searchRenderer = searchRenderer;
}

AppRenderer.prototype.startRecording = function() {
    this.recorderRenderer.startRecording();
    this.searchRenderer.fadeOut();
    // this.moviesRenderer.fadeOut();
    // this.errorRenderer.hide();
};

AppRenderer.prototype.stopRecording = function(query) {
    this.recorderRenderer.stopRecording();
    this.searchRenderer.fadeIn(query);
    // this.moviesRenderer.fadeIn();
};

AppRenderer.prototype.showTranscript = function() {
    // this.recorderRenderer.record();
    // this.errorRenderer.hide();
};

AppRenderer.prototype.displayError = function(error) {
    // this.recorderRenderer.fadeOut();
    // this.moviesRenderer.fadeOut();
    // this.errorRenderer.show();
};

AppRenderer.prototype.refreshMovies = function(movies) {
    // this.moviesRenderer.fadeIn();
    // this.errorRenderer.hide();
};
