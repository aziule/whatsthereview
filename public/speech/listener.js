function SpeechListener(movieScoreFetcher) {
    if (typeof movieScoreFetcher.getMovieScore !== 'function') {
        throw 'movieMatcher must implement the getMovieScore method';
    }

    this.isListening = false;
    this.isSupported = true;
    this.movieScoreFetcher = movieScoreFetcher;

    var SpeechRecognition = window.SpeechRecognition ||
                      window.webkitSpeechRecognition ||
                      window.mozSpeechRecognition ||
                      window.msSpeechRecognition ||
                      window.oSpeechRecognition;

    // Check browser support
    if (!SpeechRecognition) {
        this.isSupported = false;
        console.error('Speech recognition is not supported by your browser');
        return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-GB';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
};

SpeechListener.prototype.listen = function(successCallback, errorCallback, doneCallback) {
    if (!this.isSupported || this.isListening) {
        return;
    }

    var self = this;

    this.isListening = true;

    return new Promise(function(resolve, reject) {
        self.recognition.start();

        self.recognition.onend = function() {
            self.isListening = false;
        };

        self.recognition.onresult = function() {
            var transcript = event.results[0][0].transcript;
            resolve(transcript);
        };


        self.recognition.onerror = function(e) {
            reject(e.error);
        };
    });
};