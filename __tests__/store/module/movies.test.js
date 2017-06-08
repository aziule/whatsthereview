"use strict"

import MoviesModule from '../../../src/js/store/module/movies'

describe('Movies module actions', () => {
    it('updates the state when a search is in progress', () => {
        const commit = jest.fn();

        MoviesModule.actions.SEARCH_IN_PROGRESS({ commit });
        expect(commit).toBeCalledWith('setIsFetchingMovies');
    });

    it('updates the state when a search is done', () => {
        const commit = jest.fn();

        MoviesModule.actions.SEARCH_DONE({ commit });
        expect(commit).toBeCalledWith('setIsNotFetchingMovies');
    });

    it('does not fetch movies again when a search is already in progress', () => {
        const state = {
            isLoading: true
        };

        const result = MoviesModule.actions.ON_VOICE_RECORDED({ state });
        expect(result).toBeUndefined();
    });

    // todo
    it('fetches movies when voice is recorded', () => {
        const state = {
            isLoading: false
        };

        const commit = jest.fn();
        const dispatch = jest.fn();
        const transcript = 'JCVD movies';

        MoviesModule.actions.ON_VOICE_RECORDED({ state, commit, dispatch }, transcript);
        expect(dispatch).toBeCalledWith('SEARCH_IN_PROGRESS', transcript);
    });
});

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