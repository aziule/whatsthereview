"use strict"

import MoviesModule from '../../../src/js/store/module/movies'

describe('Movies module mutations', () => {
    it('updates the movies list', () => {
        const { updateMoviesList } = MoviesModule.mutations;

        const state = {
            movies: [],
            wasUpdated: false
        };

        const movies = [
            'Street Fighter',
            'Double Impact',
        ];

        updateMoviesList(state, movies);
        expect(state.movies).toBe(movies);
        expect(state.wasUpdated).toBe(true);
    });

    it('sets the loading state', () => {
        const { setIsFetchingMovies, setIsNotFetchingMovies } = MoviesModule.mutations;

        const state = {
            isLoading: false
        };

        setIsFetchingMovies(state);
        expect(state.isLoading).toBe(true);

        setIsNotFetchingMovies(state);
        expect(state.isLoading).toBe(false);
    });

    it('sets the error when fetching movies', () => {
        const { setMoviesListError } = MoviesModule.mutations;

        const state = {
            error: null
        };

        setMoviesListError(state, 'Oh noes :(');
        expect(state.error).toBe('Oh noes :(');
    });
});