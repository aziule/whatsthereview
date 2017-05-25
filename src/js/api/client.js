function ApiClient(apiDataTransformer) {
    if (typeof apiDataTransformer.apiDataToMoviesList !== 'function') {
        throw 'apiDataTransformer must implement the apiDataToMoviesList method';
    }

    this.url = 'https://www.rottentomatoes.com/api/private/v2.0/search';
    this.apiDataTransformer = apiDataTransformer;
}

ApiClient.prototype.queryApi = function(q) {
    var self = this;

    // @todo: add caching using local storage

    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        var url = self.url + '?limit=10&q=' + q;

        xhr.open('GET', url);

        xhr.onload = function() {
            if (this.status === 200) {
                var apiData = JSON.parse(this.responseText);

                resolve(self.apiDataTransformer.apiDataToMoviesList(apiData));

                return;
            }

            reject({
                httpStatus: this.status,
                httpStatusText: this.statusText
            });
        };

        xhr.onerror = function() {
            reject({
                httpStatus: this.status,
                httpStatusText: this.statusText
            });
        };

        xhr.send();
    });
};
