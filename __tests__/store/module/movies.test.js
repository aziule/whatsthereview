"use strict"

import MoviesModule from '../../../src/js/store/module/movies'

describe('Movies module getters', () => {
   it('gets the movies list', () => {
       const state = {
           movies: [
               'Bloodsport',
               'Hard Target',
           ]
       };

       const result = MoviesModule.getters.allMovies(state);
       expect(result).toEqual([
           'Bloodsport',
           'Hard Target',
       ]);
   })

   it('gets the loading state', () => {
       const state = {
           isLoading: false
       };

       const result = MoviesModule.getters.isLoading(state);
       expect(result).toBe(false);
   });

   it('gets the movies list error', () => {
       const state = {
           error: 'JCVD movies not found!'
       };

       const result = MoviesModule.getters.moviesListError(state);
       expect(result).toBe('JCVD movies not found!');
   });

   it('gets the updating state', () => {
       const state = {
           wasUpdated: false
       };

       const result = MoviesModule.getters.moviesListWasUpdated(state);
       expect(result).toBe(false);
   });
});

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