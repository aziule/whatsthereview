"use strict"

import Show from '../../../src/js/service/show/show'

describe('Show model', () => {
    const name = 'Avatar';
    const pictureUrl = 'http://some-image-repo.com/image.png';
    const score = 50;
    const matchingScore = 100;

    it('creates movies', () => {
        const show = Show.movie(name, pictureUrl, { score: score, matchingScore: matchingScore });

        expect(show.name).toBe(name);
        expect(show.pictureUrl).toBe(pictureUrl);
        expect(show.score).toBe(score);
        expect(show.matchingScore).toBe(matchingScore);
    });

    it('creates tv shows', () => {
        const show = Show.tvShow(name, pictureUrl, { score: score, matchingScore: matchingScore });

        expect(show.name).toBe(name);
        expect(show.pictureUrl).toBe(pictureUrl);
        expect(show.score).toBe(score);
        expect(show.matchingScore).toBe(matchingScore);
    });
});