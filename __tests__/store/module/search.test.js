"use strict"

import SearchModule from '../../../src/js/store/module/search'

describe('Search module', () => {
    it('sets the search query', () => {
        const { setSearchQuery } = SearchModule.mutations;
        const state = {
            query: null
        };

        setSearchQuery(state, 'Die Hard');
        expect(state.query).toBe('Die Hard');

        setSearchQuery(state, 'Die Hard 2');
        expect(state.query).toBe('Die Hard 2');
    });

    it('gets the current query', () => {
        const state = {
            query: 'The Sixth Sense'
        };

        const result = SearchModule.getters.currentQuery(state);
        expect(result).toBe('The Sixth Sense');
    });
});