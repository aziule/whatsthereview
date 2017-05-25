function AppRenderer(errorRenderer, moviesRenderer, recorderRenderer) {
    this.errorRenderer = errorRenderer;
    this.moviesRenderer = moviesRenderer;
    this.recorderRenderer = recorderRenderer;
}

AppRenderer.prototype.startRecording = function() {
    this.recorderRenderer.startRecording();
    // this.moviesRenderer.fadeOut();
    // this.errorRenderer.hide();
};

AppRenderer.prototype.stopRecording = function() {
    this.recorderRenderer.stopRecording();
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
