"use strict"

const httpClient = {
    getJSON: (url) => {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();

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
    }
}

export default httpClient;
