"use strict"

import Show from '../../../src/js/service/show/show'
import Evaluator from '../../../src/js/service/show/evaluator'

describe('Show evaluator service', () => {
    it('adds matching score to shows', () => {
        const shows = [
            Show.movie('Ali G', 'pic', { score: 50 }),
            Show.tvShow('Team America', 'pic', { score: 50 }),
            Show.tvShow('The Interview', 'pic', { score: 50 }),
        ];

        const evaluatedShows = Evaluator.addMatchingScore('The Interview', shows);

        expect(evaluatedShows[0].matchingScore).toBe(30);
        expect(evaluatedShows[1].matchingScore).toBe(30);
        expect(evaluatedShows[2].matchingScore).toBe(100);
    });
});
