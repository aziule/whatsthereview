"use strict"

import Vue from 'vue'

const httpClient = {
    getJSON: (url) => {
        return new Promise(function(resolve, reject) {
            Vue
                .http
                .get(url).then(response => {
                    return resolve(response.json())
                }).catch(response => {
                    return reject({
                        httpStatus: response.status,
                        httpStatusText: response.statusText,
                    })
                })
        });
    }
}

export default httpClient;
