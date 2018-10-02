"use strict"

import Show from '../../../src/js/service/show/show'
import Filter from '../../../src/js/service/show/filter'

describe('Show filter service', () => {
    it('removes irrelevant shows', () => {
        const shows = [
            Show.movie('Silent Hill', 'pic', { score: 50, matchingScore: 100 }),
            Show.movie('Hitch', 'pic', { matchingScore: 100 }),
            Show.tvShow('World War Z', 'pic', { matchingScore: 90 }),
            Show.tvShow('Welcome to Zombie Land', 'pic', { matchingScore: 0 }),
        ];

        expect(
            Filter.removeIrrelevantShows(shows)
        ).toEqual([
            shows[0],
            shows[1],
        ]);
    });
});