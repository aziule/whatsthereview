function ApiClient() {
    this.url = 'https://www.rottentomatoes.com/api/private/v2.0/search';
}

ApiClient.prototype.queryApi = function(q) {
    var self = this;

    // @todo: add caching using local storage

    return new Promise(function(resolve, reject) {
        // @todo: replace with a proper node module
        var xhr = new XMLHttpRequest();
        var url = self.url + '?limit=10&q=' + q;

        xhr.open('GET', url);

        xhr.onload = function() {
            if (this.status === 200) {
                var apiData = JSON.parse(this.responseText);

                resolve(apiData);

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

export default new ApiClient();
