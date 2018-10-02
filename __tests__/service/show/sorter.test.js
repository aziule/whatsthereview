"use strict"

import Show from '../../../src/js/service/show/show'
import Sorter from '../../../src/js/service/show/sorter'

describe('Show sorter service', () => {
    it('sorts shows', () => {
        const show1 = Show.movie('Fight Club', 'pic', { score: 50, matchingScore: 50 });
        const show2 = Show.movie('Snatch', 'pic', { score: 50, matchingScore: 100 });
        const show3 = Show.tvShow('Snatch', 'pic', { score: 50, matchingScore: 100 });
        const show4 = Show.movie('Django', 'pic', { score: 50, matchingScore: 100 });
        const show5 = Show.movie('Avatar', 'pic', { score: 50, matchingScore: 50 });
        const show6 = Show.movie('Flight', 'pic', { score: 50, matchingScore: 0 });


        expect(
            Sorter.sortShows([show1, show2, show3, show4, show5, show6])
        ).toEqual([
            show4,
            show2,
            show3,
            show5,
            show1,
            show6,
        ]);
    });
});