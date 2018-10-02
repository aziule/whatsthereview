"use strict"

import fs from 'fs'
import Fetcher from '../../../src/js/service/show/fetcher'
import HttpClient from '../../../src/js/service/http-client'
import Show from '../../../src/js/service/show/show'

describe('Show fetcher service', () => {
    it('fetches shows from the API', () => {
        HttpClient.getJSON = jest.fn((url) => {
            return Promise.resolve(JSON.parse(fs.readFileSync('./__tests__/__mockData__/search-snatch.json')));
        });

        Fetcher.fetchShows('query').then((shows) => {
            expect(shows).toEqual([
                Show.movie('Invasion of the Body Snatchers', 'pic_url1', { score: 94 }),
                Show.movie('The Candy Snatchers', 'pic_url2', { score: 83 }),
                Show.movie('Body Snatchers', 'pic_url3', { score: 71 }),
                Show.movie('The Bone Snatcher', 'pic_url4', { score: 0 }),
                Show.movie('Snatch', 'pic_url5', { score: 73 }),
                Show.movie('Invasion of the Body Snatchers', 'pic_url6', { score: 98 }),
                Show.movie('The Body Snatcher', 'pic_url7', { score: 81 }),
                Show.movie('Snatched', 'pic_url8'),
                Show.movie('Snatched!: Curse of the Pink Panties 2', 'pic_url9'),
                Show.movie('Snatched', 'pic_url10', { score: 36 }),
                Show.tvShow('Snatch', 'pic_url11', { score: 33 }),
                Show.tvShow('Snatchers', 'pic_url12'),
            ]);
        });
    });

    it('handles HTTP errors', () => {
        HttpClient.getJSON = jest.fn((url) => {
            return Promise.reject({
                httpStatus: 500,
                httpStatusText: 'The error message'
            });
        });

        Fetcher.fetchShows('query').catch((err) => {
            expect(err).toBe('The error message');
        });
    });

    it('handles CORS and other unknown errors', () => {
        HttpClient.getJSON = jest.fn((url) => {
            return Promise.reject({
                httpStatus: 0,
                httpStatusText: ''
            });
        });

        Fetcher.fetchShows('query').catch((err) => {
            expect(err).toBe('Something went wrong')
        })
    });
});